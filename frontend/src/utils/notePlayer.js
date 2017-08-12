import Tone from 'tone';
import { NUM_KEY_MAP } from '../config';

// const synth = new Tone.Synth().toMaster();
const polySynth = new Tone.PolySynth(61, Tone.Synth).toMaster();

export function attack(i) {
    // console.log('goint to attack', i, NUM_KEY_MAP[i]);
    polySynth.triggerAttack([NUM_KEY_MAP[i]]);
}

export function release(i) {
    // console.log('going to release ', i, NUM_KEY_MAP[i]);
    polySynth.triggerRelease([NUM_KEY_MAP[i]]);
}


// attack(30);
// attack(30);

// setTimeout(function() {
//     release(30);
//     // release(30)
// }, 1000);

// release(30);
// release(30)