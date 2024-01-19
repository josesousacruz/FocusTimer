import state from "./state.js";
import * as element from "./elements.js";
import { reset } from "./actions.js";
import { finalyTimer } from "./sounds.js";

export const countDown = () =>{
    clearTimeout(state.countdownId)
    if(!state.isRunning){
        return
    }

    let minutes =  Number(element.minutes.textContent)
    let seconds = Number(element.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }
    
    if(minutes < 0){
     finalyTimer.play()   
    reset()
    return
    }

    updateDisplay(minutes,seconds)

   state.countdownId = setTimeout(()=>countDown(),1000)
}

export const updateDisplay = (minute,second) =>{
minute = minute ?? state.minute
second = second ?? state.second

element.minutes.textContent = String(minute).padStart(2,'0') 
element.seconds.textContent = String(second).padStart(2,'0') 



}