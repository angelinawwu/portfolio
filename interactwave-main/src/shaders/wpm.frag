precision mediump float;
varying vec2 uv;

uniform int N;
uniform sampler2D texture;
uniform float k0;
uniform float dx;
uniform float dz;


#define PI 3.14159265358979

#include ./utils/pack.frag


void main(){
    int n = int(uv.x * float(N));
    vec2 offset = vec2(0, 1.0/float(N)*dz/dx);
    vec2 x = rgba2vec(texture2D(texture, uv + offset));
    // gl_FragColor = vec2rgba(x);
    // return;

    float kx = (mod(float(n)/float(N)+0.5, 1.0)-0.5)/dx*2.0*PI;
    float kz = sqrt(k0*k0-kx*kx);
    // float angle = (kz * dz) * (1.0-uv.y) * float(N);
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
    // gl_FragColor = vec2rgba(vec2(A));
}