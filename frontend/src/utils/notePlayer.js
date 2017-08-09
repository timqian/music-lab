import Tone from 'tone';
import { NUM_KEY_MAP } from '../config';

const synth = new Tone.Synth().toMaster();

export function attack(i) {
    console.log('goint to attack', i, NUM_KEY_MAP[i]);
    synth.triggerAttack(NUM_KEY_MAP[i]);
}

export function release() {
    synth.triggerRelease();
}