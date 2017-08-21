import Tone from 'tone';
import { NUM_KEY_MAP } from '../config';

// const synth = new Tone.Synth().toMaster();
const polySynth = new Tone.PolySynth(61, Tone.Synth).toMaster();

export function attack(i) {
    // console.log('goint to attack', i, NUM_KEY_MAP[i]);
    polySynth.triggerAttackRelease([NUM_KEY_MAP[i]], '4n');
}

export function release(i) {
    // console.log('going to release ', i, NUM_KEY_MAP[i]);
    polySynth.triggerRelease([NUM_KEY_MAP[i]]);
}

export function attackRow (currentRow, lastRow) {
    const attackArr = [];
    const releaseArr = [];
    for (let i = 0; i < currentRow.length; i++) {
        if(currentRow[i] !== 0 && currentRow[i] !== lastRow[i]) attackArr.push(NUM_KEY_MAP[i]);
        if(currentRow[i] === 0) releaseArr.push(NUM_KEY_MAP[i]);
    }
    
    polySynth.triggerAttackRelease(attackArr);
    polySynth.triggerRelease(releaseArr);
}
// attack(30);
// attack(30);

// setTimeout(function() {
//     release(30);
//     // release(30)
// }, 1000);

// release(30);
// release(30);