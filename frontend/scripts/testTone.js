// const Tone = require('tone');
const fs = require('fs');
const MidiConvert = require('midiconvert');

var midi = MidiConvert.create()
// add a track
midi.track()
  // select an instrument by its MIDI patch number
  .patch(32)
  // chain note events: note, time, duration
  .note(60, 0, 2)
  .note(63, 1, 2)
  .note(60, 2, 2)

// write the output
fs.writeFileSync("output.mid", midi.encode(), "binary")