'use strict';

var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Sam have 3 cats?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Right! Sam has felines named Buddy, Alistair, and Trillian');
} else {
  alert('Wrong, Sam actually does have 3 cats. Weird dude.');
}
