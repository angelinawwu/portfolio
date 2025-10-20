import {regl, rect} from '../render'

// main drawing function (shading)
const draw = regl({
    frag: (await import('./draw.frag')).default,
    vert: (await import('./utils/default.vert')).default,
    attributes: {
        position: rect
    },
    uniforms: {
        textureR: regl.prop('textureR'),
        textureG: regl.prop('textureG'),
        textureB: regl.prop('textureB'),
        phase: regl.prop('phase'),
        colormode: regl.prop('colormode'),
    },
    count: 6
})


export {draw}