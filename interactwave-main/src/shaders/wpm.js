import {regl, rect} from '../render'



// wpm shader
const wpm = regl({
    frag: (await import('./wpm.frag')).default,
    vert: (await import('./utils/default.vert')).default,
    attributes: {
        position: rect,
    },
    uniforms: {
        N: regl.prop('N'),
        texture: regl.prop('texture'),
        dx: regl.prop('dx'),
        dz: regl.prop('dz'),
        k0: regl.prop('k0'),
    },
    count: 6,
})



function WPM(fbo, fbo_temp, N, k0, dz, dx){
    fbo_temp.use(function(){{
        regl.clear({
            color: [0, 0, 0, 0],
            depth: 1,
        })
        wpm({
            N: N,
            texture: fbo.color[0],
            dz: dz,
            dx: dx,
            k0: k0,
        })
    }})
    const temp = fbo_temp
    fbo_temp = fbo
    fbo = temp
    return [fbo, fbo_temp]
}

export {WPM}