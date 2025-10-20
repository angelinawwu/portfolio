import { regl } from './render'
import { draw } from './shaders/draw'
import { FFT } from './shaders/fft'
import { WPM } from './shaders/wpm'
import { DEBUG } from './shaders/debug'
import { sample } from './shaders/sample'
import { SmoothVar } from './smoothvar'
import { update_overlay } from './overlay'

// FFT domain
const levels = 4
const N = 2 ** levels
const NH = Math.round(N / 1)

// resize 
regl._gl.canvas.width = N
regl._gl.canvas.height = N


const domain_size = 15
const dx = domain_size / N
const dz = domain_size / NH

let temp_fbo = regl.framebuffer({
    color: [
        // regl.texture({ type: "float", width: N, height: NH, format: "rgba"}),
        regl.texture({ width: N, height: NH, format: "rgba", mag:"nearest", min:"nearest"}),
    ]
})

let fbo = regl.framebuffer({
    color: [
        // regl.texture({ type: "float", width: N, height: NH, format: "rgba"}),
        regl.texture({ width: N, height: NH, format: "rgba", mag:"nearest", min:"nearest"}),
    ]
})


// Main loop
fbo.use(function () {
    regl.clear({
        color: [0, 0, 0, 0],
        depth: 1,
    })
})



function update_debug() {
    regl.poll()

    regl.clear({
        color: [0, 0, 0, 1],
    })


    const wavelength = 0.532
    const k0 = Math.PI * 2 / wavelength


    let output = DEBUG(fbo, temp_fbo, NH, k0*domain_size,
        parameters.width.value,
        parameters.power.value * domain_size, -1, -1)
    fbo = output[0]
    temp_fbo = output[1]

    output = FFT(fbo, temp_fbo, levels, N, 1)
    fbo = output[0]
    temp_fbo = output[1]

    // output = WPM(fbo, temp_fbo, N, k0*1, dz, dx)
    // fbo = output[0]
    // temp_fbo = output[1]

    output = FFT(fbo, temp_fbo, levels, N, -1)
    fbo = output[0]
    temp_fbo = output[1]



    draw({
        textureR: fbo.color[0],
        textureG: fbo.color[0],
        textureB: fbo.color[0],
        phase: 0,
        colormode: 0
    })



}

window.regl = regl
window.parameters = parameters

export { update_debug }