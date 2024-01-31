import state from "./state.js";
// Importa arquivo com todos os status possiveis para o cronometro
import * as events  from './events.js';
// Importa arquivo que contem os eventos responsaveis por acionar a manipulação dos ekenebtis os elementos
import * as timer from './timer.js';

export const start = (minutes, seconds) => {
state.minute = minutes;
state.second = seconds;

timer.updateDisplay(minutes,seconds)

events.registerControls()
events.setMinutes()
}

export const stop = () =>{
    
}
