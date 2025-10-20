import { regl } from './render'
import { draw } from './shaders/draw'
import { FFT } from './shaders/fft'
import { WPM } from './shaders/wpm'
import { SHAPE } from './shaders/shape'
import { sample } from './shaders/sample'
import { SmoothVar } from './smoothvar'
import { update_overlay } from './overlay'
// FFT domain
const levels = 9
const N = 2 ** levels
const NH = Math.round(N / 4)

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


const rgb_fbos = ['r', 'g', 'b'].map(x => regl.framebuffer({
    color: [
        // regl.texture({ type: "float", width: N, height: NH, format: "rgba"}),
        regl.texture({ width: N, height: NH, format: "rgba", mag:"nearest", min:"nearest" }),
    ]
}))

const rgb_fbos_mag = ['r', 'g', 'b'].map(x => regl.framebuffer({
    color: [
        // regl.texture({ type: "float", width: N, height: NH, format: "rgba"}),
        // regl.texture({ width: N, height: NH, format: "rgba", mag: "linear" }),
        regl.texture({ width: N, height: NH, format: "rgba", mag:"linear", min:"linear" }),
    ]
}))


// Main loop
rgb_fbos.map(x => x.use(function () {
    regl.clear({
        color: [0, 0, 0, 0],
        depth: 1,
    })
}))


let mx = 0
let my = 0
let m_down = false
let mdx = 0
let mdy = 0
let mpx = 0
let mpy = 0


const parameters = {
    width: new SmoothVar(0.2, domain_size/N*2, 0.7),
    power: new SmoothVar(0.1, -1/5, 1/5),
    colormode: new SmoothVar(1, 0, 1)
}

let phase = 0
let block_light = false

function update() {
    regl.poll()

    regl.clear({
        color: [0, 0, 0, 1],
    })

    for (let i = 0; i < 3; i++) {
        // WPM
        const wavelength = [0.63, 0.532, 0.47][i]
        const k0 = Math.PI * 2 / wavelength

        // curvature radius is power
        // power = 1/f
        // R = f

        let output = SHAPE(rgb_fbos[i], temp_fbo, NH, k0*domain_size,
            parameters.width.value,
            parameters.power.value * domain_size, block_light?mx:-1, block_light?my:-1)
        rgb_fbos[i] = output[0]
        temp_fbo = output[1]

        output = FFT(rgb_fbos[i], temp_fbo, levels, N, 1)
        rgb_fbos[i] = output[0]
        temp_fbo = output[1]

        output = WPM(rgb_fbos[i], temp_fbo, N, k0, dz, dx)
        rgb_fbos[i] = output[0]
        temp_fbo = output[1]

        output = FFT(rgb_fbos[i], temp_fbo, levels, N, -1)
        rgb_fbos[i] = output[0]
        temp_fbo = output[1]

        rgb_fbos_mag[i].use(function () {
            regl.clear({ depth: 1 })
            sample({ texture: rgb_fbos[i] })
        })
    }


    // draw({
    //     textureR: rgb_fbos[0].color[0],
    //     textureG: rgb_fbos[1].color[0],
    //     textureB: rgb_fbos[2].color[0],
    //     phase: phase,
    //     colormode: parameters.colormode.value
    // })
    draw({
        textureR: rgb_fbos_mag[0].color[0],
        textureG: rgb_fbos_mag[1].color[0],
        textureB: rgb_fbos_mag[2].color[0],
        phase: phase,
        colormode: parameters.colormode.value
    })




    phase = phase - Math.PI / 60
    phase = phase % (Math.PI * 2)

    // debugger;

    // update for mouse movement

    mdx = mx - mpx  
    mdy = my - mpy

    if (m_down) {
        parameters.width.add(mdx * 0.7)
        parameters.power.add(mdy * -0.4)
    }
    for(let i in parameters){
        parameters[i].update()
    }

    mpx = mx
    mpy = my

    update_overlay(parameters.width.value, parameters.power.value, domain_size)

    // console.log(regl.read())
}



window.addEventListener('mousemove', (event) => {
    block_light = true
    const rect = regl._gl.canvas.getBoundingClientRect()
    mx = (event.clientX - rect.left) / rect.width
    my = 1 - (event.clientY - rect.top) / rect.height
})

window.addEventListener('mousedown', (event) => {
    m_down = true
    const rect = regl._gl.canvas.getBoundingClientRect()
    mpx=mx = (event.clientX - rect.left) / rect.width
    mpy=my = 1 - (event.clientY - rect.top) / rect.height
    // mx = mdx
    // my = mdy
})

window.addEventListener('mouseup', () => {
    m_down = false
})

// Touch screen
const canvas = regl._gl.canvas
canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

function handleTouchStart(e) {
    e.preventDefault();
    m_down = true;
    block_light = true;
    const rect = canvas.getBoundingClientRect();
    mpx=mx = (e.touches[0].clientX - rect.left) / rect.width;
    mpy=my = 1 - (e.touches[0].clientY - rect.top) / rect.height;
}

function handleTouchMove(e) {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    mx = (e.touches[0].clientX - rect.left) / rect.width;
    my = 1 - (e.touches[0].clientY - rect.top) / rect.height;
}

function handleTouchEnd(e) {
    e.preventDefault();
    m_down = false;
    block_light = false
}


window.regl = regl
window.parameters = parameters

document.getElementById('toggleButton').addEventListener('click', function(){
    parameters.colormode.set(1-parameters.colormode.target)
})

export { update }