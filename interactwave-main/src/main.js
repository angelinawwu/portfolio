import Clarity from '@microsoft/clarity';
const projectId = "qh7qxpa2do"
Clarity.init(projectId);

import './style.scss'
import {regl} from './render'
import {update} from './interactive'

const tick = regl.frame(update)

// import { update_debug } from './debug';
// window.debugmode = function(){
//     tick.cancel()
//     regl.frame(update_debug)
// }
// window.debugmode()