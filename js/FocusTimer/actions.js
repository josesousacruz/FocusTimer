import state from "./state.js";
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export const toggleRunning = () => {
    state.isRunning = document.documentElement.classList.toggle('running')

    sounds.buttonPressAudio.play()

    
    timer.countDown()
}

export const set = () => {
    elements.minutes.setAttribute('contenteditable', true)
    elements.minutes.focus()
}

export const reset = () => {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export const toggleSound = () => {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute) {
    sounds.bgAudio.play()
    }else{
    sounds.bgAudio.pause()
    }
    
}