// Inline shader code to avoid webpack module resolution issues

export const drawFragShader = `
precision mediump float;
varying vec2 uv;
uniform float phase;
uniform sampler2D textureR;
uniform sampler2D textureG;
uniform sampler2D textureB;
uniform float colormode;

vec2 rgba2vec(vec4 rgba) {
    return vec2(
        rgba.r + rgba.g / 255.0,
        rgba.b + rgba.a / 255.0
    ) * 2.0 - 1.0;
}

vec4 colormap(float x) {
    float v = abs(fract(x / 2.0) * 2.0 - 1.0);
    return vec4(
        smoothstep(0.0, 0.5, v),
        smoothstep(0.25, 0.75, v),
        smoothstep(0.5, 1.0, v),
        1.0
    );
}

#define gamma 1.0/2.2
void main(){
    vec2 x = rgba2vec(texture2D(textureG, uv));
    vec2 xr = rgba2vec(texture2D(textureR, uv));
    vec2 xb = rgba2vec(texture2D(textureB, uv));

    vec2 W = vec2(
        cos(phase),
        sin(phase)
    );

    x = vec2(
        x.x*W.x - x.y*W.y,
        x.x*W.y + x.y*W.x
    ); 

    vec4 color = colormap(x.x*10.0);

    vec3 rgb = vec3(
        pow(xr.x*xr.x+xr.y*xr.y, gamma), 
        pow(x.x*x.x+x.y*x.y, gamma), 
        pow(xb.x*xb.x+xb.y*xb.y, gamma)
    )*10.0;

    color = mix(color, vec4(rgb, 1), colormode);
    gl_FragColor = color;
}
`;

export const defaultVertShader = `
precision mediump float;
attribute vec2 position;
varying vec2 uv;
void main(){
    uv = position*0.5+0.5;
    gl_Position = vec4(position, 0, 1);
}
`;

export const fftFragShader = `
precision mediump float;
varying vec2 uv;

uniform int N;
uniform int NP;
uniform sampler2D texture;
uniform float mul;
uniform float conj;

#define PI 3.14159265358979

int modI(int a, int b) {
    float m=float(a)-floor((float(a)+0.5)/float(b))*float(b);
    return int(floor(m+0.5));
}

vec2 rgba2vec(vec4 rgba){
    float mag = rgba.r + rgba.g / 255.0;
    vec2 d = normalize(rgba.ba - 0.5);
    return mag * d;
}

vec4 vec2rgba(vec2 vec){
    float mag = length(vec)*255.0;
    float scale = max(abs(vec.x), abs(vec.y));
    float dx = vec.x / scale / 2.0;
    float dy = vec.y / scale / 2.0;
    float mag0 = floor(mag);
    return vec4(
        mag0 / 255.0,
        mag - mag0,
        dx+0.5,
        dy+0.5
    );
}

void main(){
    int n = int(uv.x * float(N));

    int n_A = modI(n, NP/2) + (n/NP) * NP / 2;
    int n_B = modI(n_A + N/2, N);

    vec2 x_A = rgba2vec(texture2D(texture, vec2(
        (float(n_A))/float(N),
        uv.y
    )));

    vec2 x_B = rgba2vec(texture2D(texture, vec2(
        (float(n_B))/float(N),
        uv.y
    )));

    float m = 1.0 - 2.0 * float(step(float(NP/2), float(modI(n, NP))));

    float angle = PI*2.0*fract(float(modI(n, NP/2))/float(NP));
    vec2 W = vec2(
        cos(angle),
        sin(angle) * conj
    );

    x_B = m*vec2(
        x_B.x*W.x - x_B.y*W.y,
        x_B.x*W.y + x_B.y*W.x
    );

    gl_FragColor = vec2rgba((x_A+x_B) * mul);
}
`;

export const wpmFragShader = `
precision mediump float;
varying vec2 uv;

uniform int N;
uniform sampler2D texture;
uniform float k0;
uniform float dx;
uniform float dz;

#define PI 3.14159265358979

vec2 rgba2vec(vec4 rgba){
    float mag = rgba.r + rgba.g / 255.0;
    vec2 d = normalize(rgba.ba - 0.5);
    return mag * d;
}

vec4 vec2rgba(vec2 vec){
    float mag = length(vec)*255.0;
    float scale = max(abs(vec.x), abs(vec.y));
    float dx = vec.x / scale / 2.0;
    float dy = vec.y / scale / 2.0;
    float mag0 = floor(mag);
    return vec4(
        mag0 / 255.0,
        mag - mag0,
        dx+0.5,
        dy+0.5
    );
}

void main(){
    int n = int(uv.x * float(N));
    vec2 offset = vec2(0, 1.0/float(N)*dz/dx);
    vec2 x = rgba2vec(texture2D(texture, uv + offset));

    float kx = (mod(float(n)/float(N)+0.5, 1.0)-0.5)/dx*2.0*PI;
    float kz = sqrt(k0*k0-kx*kx);
    float angle = (kz * dz);

    vec2 W = vec2(
        cos(angle),
        sin(angle)
    );

    x = vec2(
        x.x*W.x - x.y*W.y,
        x.x*W.y + x.y*W.x
    ); 

    gl_FragColor = vec2rgba(x);
}
`;

export const shapeFragShader = `
precision lowp float;
uniform vec4 color;
varying vec2 uv;

uniform float width;
uniform float power;
uniform sampler2D texture;
uniform vec2 mouse;
uniform int N;
uniform float k0;

vec2 rgba2vec(vec4 rgba){
    float mag = rgba.r + rgba.g / 255.0;
    vec2 d = normalize(rgba.ba - 0.5);
    return mag * d;
}

vec4 vec2rgba(vec2 vec){
    float mag = length(vec)*255.0;
    float scale = max(abs(vec.x), abs(vec.y));
    float dx = vec.x / scale / 2.0;
    float dy = vec.y / scale / 2.0;
    float mag0 = floor(mag);
    return vec4(
        mag0 / 255.0,
        mag - mag0,
        dx+0.5,
        dy+0.5
    );
}

void main(){
    float uvx = uv.x - 0.0/float(N);
    float A = smoothstep(0.0, 4.0/float(N), width*0.5-abs(uv.x-0.5))/sqrt(width)*0.025;
    
    float cs2 = pow((uvx-0.5), 2.0) * power;
    float angle = k0 * cs2 / (1.0 + sqrt(1.0 - cs2*power));

    int n = int(uv.x * float(N));
    vec2 u = vec2(
        cos(angle),
        sin(angle)
    )*A;

    vec2 x = rgba2vec(texture2D(texture, uv));

    x = mix(
        x,
        u,
        step(1.0-1.0/float(N), uv.y)
    );

    float r = distance(uv, mouse);
    x *= float(smoothstep(0.0, 0.06, r));

    // border
    float border = clamp(1.0-min(float(n), float(N-n-1))/20.0, 0.0, 1.0);
    x = x*exp(-border*0.1);

    gl_FragColor = vec2rgba(x);
}
`;

export const sampleFragShader = `
precision mediump float;
varying vec2 uv;
uniform sampler2D texture;

void main(){
    gl_FragColor = texture2D(texture, uv);
}
`;

