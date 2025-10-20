import {regl, rect} from '../render'


// Create input shape
const shape = regl({
    frag: (await import('./shape.frag')).default,
    vert: (await import('./utils/default.vert')).default,
    attributes: {
        position: rect,
    },
    uniforms: {
        width: regl.prop('width'),
        power: regl.prop('power'),
        texture: regl.prop('texture'),
        mouse: regl.prop('mouse'),
        N: regl.prop('N'),
        k0: regl.prop('k0'),
    },
    count: 6,
})

function SHAPE(fbo, fbo_temp, N, k0, width, power, mx, my){
    fbo_temp.use(function () {
        regl.clear({
            color: [0, 0, 0, 0],
            depth: 1,
        })
        shape({
            texture: fbo.color[0],
            width: width,
            power: power,
            mouse: [mx, my],
            N: N,
            k0: k0
        })
        const temp = fbo_temp
        fbo_temp = fbo
        fbo = temp
    })
    return [fbo, fbo_temp]
}

export {SHAPE}

