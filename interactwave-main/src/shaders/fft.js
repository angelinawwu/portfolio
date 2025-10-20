import {regl, rect} from '../render'

// FFT Shader
const fft = regl({
    frag: (await import('./fft.frag')).default,
    vert: (await import('./utils/default.vert')).default,
    attributes: {
        position: rect,
    },
    uniforms: {
        N: regl.prop('N'),
        NP: regl.prop('NP'),
        texture: regl.prop('texture'),
        mul: regl.prop('mul'),
        conj: regl.prop('conj')
    },
    count: 6,
})


function FFT(fbo, fbo_temp, levels, N, conj=1){
    let mul = Math.pow(1/N, 1/levels)
    if(conj<0) mul = 1;
    // conj=1 for FFT, -1 for IFFT
    for (let i = 0; i < levels; i++) {
        fbo_temp.use(function () {
            regl.clear({
                color: [0, 0, 0, 0],
                depth: 1,
            })
            fft({
                texture: fbo.color[0],
                N: N,
                NP: 2<<i,
                mul: mul,
                conj: conj
            })
        })
        const temp = fbo_temp
        fbo_temp = fbo
        fbo = temp
    }
    return [fbo, fbo_temp]
}

export {FFT}