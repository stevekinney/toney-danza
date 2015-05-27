import styles from './stylesheets/main';

import $ from 'jquery';

let oscillatorOn = false;

$('#frequency').on('change, keyup', function () {
  console.log(this.value);
});

$('.type').on('change', function () {
  console.log(this.value);
});

$('#start-stop').on('click', function () {
  oscillatorOn = !oscillatorOn;
  console.log('wowowow');
  if (oscillatorOn) {
    $(this).addClass('on').text('Stop');
  } else {
    $(this).removeClass('on').text('Start');
  }
});
