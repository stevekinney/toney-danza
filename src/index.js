import styles from './stylesheets/main';

import $ from 'jquery';
import context from './lib/audio-context';

const oscillator = context.createOscillator();
const gain = context.createGain();

oscillator.frequency.value = 220;
gain.gain.value = 0;

oscillator.connect(gain);
gain.connect(context.destination);
oscillator.start(0);

$('#frequency').on('change, keyup', function () {
  oscillator.frequency.value = parseInt(this.value, 10);
});

$('.type').on('change', function () {
  oscillator.type = this.value;
});

$('#gain-value').on('change', function () {
  gain.gain.value = parseFloat(this.value, 10);
});
