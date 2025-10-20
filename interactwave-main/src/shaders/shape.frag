precision lowp float;
uniform vec4 color;
varying vec2 uv;

uniform float width;
uniform float power;
uniform sampler2D texture;
uniform vec2 mouse;
uniform int N;
uniform float k0;

#include ./utils/pack.frag

void main(){
    float uvx = uv.x - 0.0/float(N);
    float A = smoothstep(0.0, 4.0/float(N), width*0.5-abs(uv.x-0.5))/sqrt(width)*0.025;
    // float A = exp(-pow((uvx-0.5)/width, 2.0))/sqrt(width)*0.01;
    
    float cs2 = pow((uvx-0.5), 2.0) * power;
    float angle = k0 * cs2 / (1.0 + sqrt(1.0 - cs2*power));

    int n = int(uv.x * float(N));
    vec2 u = vec2(
        cos(angle),
        sin(angle)
    )*A;


    vec2 x = rgba2vec(texture2D(texture, uv));


    // vec2 u = vec2(step(0.0, -abs(uv.y-uv.x)))*0.3;
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


    gl_FragColor =vec2rgba(x);
}