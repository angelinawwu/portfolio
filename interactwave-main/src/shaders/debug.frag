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
    float A = step(0.0, -abs(uv.x-uv.y));
    gl_FragColor = vec2rgba(vec2(A));
}