import REGL from 'regl'

// create REGL
let regl = REGL({
    // extensions: ['OES_texture_float'],
    container: document.querySelector('#canvas'),
    onDone: function(){
        console.log('load done')
        setTimeout(() => {
            document.querySelector('#canvas').classList.add('loaded')
        }, 1);
    },
    attributes:{
        // preserveDrawingBuffer: true
        depth: false
    }
})

// default rectangle mesh
const rect = regl.buffer([
    [-1, -1],
    [1, -1],
    [1, 1],
    [1, 1],
    [-1, 1],
    [-1, -1],
])


export {
    regl, rect
}