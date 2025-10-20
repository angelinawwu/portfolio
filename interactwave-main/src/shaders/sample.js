import {regl, rect} from '../render'

// main drawing function (shading)
const sample = regl({
    frag: (await import('./sample.frag')).default,
    vert: (await import('./utils/default.vert')).default,
    attributes: {
        position: rect
    },
    uniforms: {
        texture: regl.prop('texture'),
    },
    count: 6
})


export {sample}