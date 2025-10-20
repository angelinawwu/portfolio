precision mediump float;
varying vec2 uv;
uniform float phase;
uniform sampler2D textureR;
uniform sampler2D textureG;
uniform sampler2D textureB;
uniform float colormode;

#include ./utils/pack.frag
#include ./utils/colormap.frag

#define gamma 1.0/2.2
void main(){

    vec2 u = vec2(0);

    // gl_FragColor = vec4(uv, 0, 1);

    vec2 x = rgba2vec(texture2D(textureG, uv));
    vec2 xr = rgba2vec(texture2D(textureR, uv));
    vec2 xb = rgba2vec(texture2D(textureB, uv));


    // gl_FragColor = texture2D(texture, uv);
    // gl_FragColor = vec4(0, c.x*c.x+c.y*c.y, 0, 1);

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

    // color = color * step(0.0, uv.x-0.5);
    gl_FragColor = color;
}