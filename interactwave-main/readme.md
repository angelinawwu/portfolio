# Interactwave

This is the `interactwave` project, a Vite-based application for interactive visualization of waves.

## Project Setup

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.


### Development

To start the development server, run:
```sh
npm run dev
```
This will start Vite's development server.

### Building

To build the project for production, run:
```sh
npm run build
```
This will create a `dist` directory with the production build.

### Preview

To preview the production build, run:
```sh
npm run preview
```
This will start a local server to preview the production build.

## Dependencies

- [regl](https://github.com/regl-project/regl)
- [sass](https://sass-lang.com/)
- [vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl)

## Dev Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

# How FFT (might) works:

> This is based on my understanding of Cooley–Tukey FFT algorithm, I am also learning it.

$$
\begin{bmatrix}
X_0 \\ 
\vdots\\ 
X_i \\ 
\vdots \\ 
X_{N-1}
\end{bmatrix}
=\begin{bmatrix}
W_N^0 & \ldots & W_N^0 & \ldots & W_N^0 \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
W_N^0 & \ldots & W_N^{ij} & \ldots & W_N^{-i} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
W_N^0 & \ldots & W_N^{-j} & \ldots & W_N^1 \\
\end{bmatrix}
\begin{bmatrix}
x_0 \\ 
\vdots\\ 
x_j \\ 
\vdots \\ 
x_{N-1}
\end{bmatrix}
$$

$$
W_N = \cos{2\pi\over N} + \textit{i} \sin{2\pi\over N}
$$

> the $\textit{i}$ before $\sin$ represents imaginary number, in other places, the $i$ is used for indexing for convenience.


$$
X_i = \sum_{j=0}^{N-1}W_N^{ij}x_j
$$

### Seperate into smaller problem:
If we isolate columns with $j=2n$ and $j=2n+1$

$n=0, 1, \ldots, N/2-1$

$$
X_i = \sum W_N^{i2n}x_{2n} + \sum W_N^{i(2n+1)}x_{2n+1}
$$

And isolate rows with $i=m$ and $i=m+N/2$

$m=0, 1, \ldots, N/2-1$

case 1

$$
X_m = \sum W_N^{2mn}x_{2n} + \sum W_N^{m(2n+1)}x_{2n+1}
$$

case 2
 
$$
X_{m+N/2} = \sum W_N^{(m+N/2)2n}x_{2n} + \sum W_N^{(m+N/2)(2n+1)}x_{2n+1}
\\ = \sum W_N^{2mn+nN}x_{2n} + \sum W_N^{m(2n+1)+nN+N/2}x_{2n+1}
$$

### Compare similar terms in both cases:

The first term of both cases:

$$
\sum W_N^{2mn+nN}x_{2n} = \sum W_N^{2mn}x_{2n}
$$

The second term of both cases:

$$
\sum W_N^{m(2n+1)+nN+N/2}x_{2n+1} = - \sum W_N^{m(2n+1)}x_{2n+1}
$$

### Recursive rule

First, we compute:

$$
A_m = \sum_{n=0}^{N/2-1} W_N^{2mn}x_{2n}
$$

$$
B_m = W_N^m \sum_{n=0}^{N/2-1} W_N^{2mn}x_{2n+1}
$$

Then we have:

$$
X_{m} = A_m + B_m
$$

$$
X_{m+N/2} = A_m - B_m
$$

$A_m$ is a smaller FFT, with only half the size, so does $B_m$ but need to multiply by a factor $W_{N}^m$:

let $i'=m,j'=n, N'=N/2$

$$
A_{i'}= \sum_{j'=0}^{N'-1} W_{N'}^{i'j'}x_{2i'}
$$


$$
B_{i'}= W_N^{i'}\sum_{j'=0}^{N'-1} W_{N'}^{i'j'}x_{2i'+1}
$$


## Computation steps

Which is A, which is B in each recursive steps:
||x0|x1|x2|x3|x4|x5|x6|x7|
|-|-|-|-|-|-|-|-|-|
|step 1|A|A|A|A|B|B|B|B|
|step 2|A|A|B|B|A|A|B|B|
|step 3|A|B|A|B|A|B|A|B|

### Compute Tree:
- A: 0, 2, 4, 6
  - A: 0, 4
  - B: 2, 6
- B: 1, 3, 5, 7
  - A: 1, 5
  - B: 3, 7

Look up index in each step, perform A+B or A-B, and the W to multiply:

||x0|x1|x2|x3|x4|x5|x6|x7|
|-|-|-|-|-|-|-|-|-|
|1A|0|0|1|1|2|2|3|3|
|1B|4|4|5|5|6|6|7|7|
|W2|0|0|0|0|0|0|0|0|
|A±B|+|-|+|-|+|-|+|-|
||
|2A|0|1|0|1|2|3|2|3|
|2B|4|5|4|5|6|7|6|7|
|W4|0|1|0|1|0|1|0|1|
|A±B|+|+|-|-|+|+|-|-|
||
|3A|0|1|2|3|0|1|2|3|
|3B|4|5|6|7|4|5|6|7|
|A±B|+|+|+|+|-|-|-|-|
|W8|0|1|2|3|0|1|2|3|
||X0|X1|X2|X3|X4|X5|X6|X7|

### How to find the index?
B is always (A+(N/2))%N, 
A depends on: 
- Size of FFT (N')
- How many matrices? (N/N')
- Each matrix advances index by (N'/2)

for entry i:
- which matrix? : floor(i/N')
- index within matrix? : mod(i, N')
- index within half of the matrix? : mod(i, N'/2)
- index of corresponding A? mod(i, N'/2) + floor(i/N') * (N'/2)

For N=8 example:
|step|N'|#mats|Δi|
|-|-|-|-|
|1|2|4|1|
|2|4|2|2|
|3|8|1|4|


## License

This work is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

You are free to:

- **Share** — copy and redistribute the material in any medium or format  
- **Adapt** — remix, transform, and build upon the material  
  for any purpose, even commercially.  

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.  
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the **same license** as the original.

See the full license at [https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/).