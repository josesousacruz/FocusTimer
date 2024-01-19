import state from "./state.js";
import * as events  from './events.js';
import * as timer from './timer.js';

export const start = (minutes, seconds) => {
state.minute = minutes;
state.second = seconds;

timer.updateDisplay(minutes,seconds)

events.registerControls()
events.setMinutes()
}

export const stop = () => {


}