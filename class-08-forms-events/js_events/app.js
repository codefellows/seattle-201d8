'use strict';

var clickBait = document.getElementById('click-me'),
    zoidberg = document.getElementById('zoidberg');

// What will run when our event happens
function logToConsole(){
  console.log('This function is printing to the console');
};

// // Using a traditional event handler
// clickBait.onclick = logToConsole;

// // Using an HTML5 event listener
// clickBait.addEventListener('click', logToConsole, false);

// // An event listener can use an anonymous function too
// clickBait.addEventListener('click', function(){
//   logToConsole();
// }, false);

// An log that takes data
function logSomeData(someData){
  console.log(someData);
};

// // An event listener using an anonymous function can pass
// // data through to the named functions that it holds
// clickBait.addEventListener('click', function(){
//   var today = new Date();
//   logSomeData(today);
// }, false);

// A function for showing Zoidberg
function showZoidberg(){
  zoidberg.className = '';
};

// // A benefit of being able to use anonymous functions
// // in your event listener is allowing your event to
// // trigger multiple functions
// clickBait.addEventListener('click', function(){
//   logToConsole();
//   showZoidberg();
// }, false);

// A function for hiding crustaceans
function nobodyWantsToSeeThat(){
  zoidberg.className = 'hidden';
};

// // All you're doing is filling that space where you put a
// // named function with an anonymous function. As such, you
// // can fill it with any logic you want.
// clickBait.addEventListener('click', function(){
//   if(zoidberg.className){
//     showZoidberg();
//   } else {
//     nobodyWantsToSeeThat();
//   }
// }, false);

// // You can use the anonymous function in the event listener
// // to access the object that you're acting on
// var counter = 0;
// clickBait.addEventListener('click', function(){
//   counter++
//   this.textContent = 'You clicked me ' + counter + ' times!';
// });

// // Note that an object can have multiple event types.
// clickBait.addEventListener('mouseover', function(){
//   logSomeData('This is because I\'m hovering over the object');
// }, false);

// // One benefit of using anonymous functions is that you can
// // use them to actually see the event itself by passing in the
// // event to the anonymous function as a parameter
// document.addEventListener('keypress', function(event){
//   console.log(event);
// }, false);

// // Knowing that we can capture that event, and that the event
// // itself is an object, we can work with properties belonging
// // to that event object
// var keysDisplay = document.getElementById('key-press');
// document.addEventListener('keypress', function(event){
//   console.log(event);
//   var newCharacter = event.key.toUpperCase(),
//       oldContent = keysDisplay.textContent;
//
//   keysDisplay.textContent = oldContent + newCharacter;
// });

// // Certain HTML elements have some default behavior that triggers
// // when you click. We can use 'preventDefault' to stop that from
// // happening
var theForm = document.getElementById('main-form');
// theForm.addEventListener('submit', function(event){
//   event.preventDefault();
// }, false);

// Instead of jumping to a new page, we can instead do stuff with
// the page that we have and the data currently in the form.
var formResults = document.getElementById('form-results');
// theForm.addEventListener('submit', function(event){
//   event.preventDefault();
//   var listItem = document.createElement('li');
//   var inputField = document.getElementById('firstname');
//   listItem.textContent = inputField.value;
//   formResults.appendChild(listItem);
// }, false);

// We can also use form events in combination with preventDefault
// to check that our input is the type of input we want. For our
// example, we want a name. Names shouldn't have numbers or special
// characters in them. So, let's make sure of that.
function validateName(fieldText){
  var isValid = false,
      goodChars = 'abcdefghijklmnopqrstuvwxyz.\'-'; // every acceptable character

  // check that every input character is good
  if (fieldText) {
    var countLetters = 0;

    for (var i = 0; i < fieldText.length; i++) {
      var oneLetter = fieldText[i].toLowerCase();

      // check that this one letter is good
      for (var j = 0; j < goodChars.length; j++) {
        if (oneLetter === goodChars[j]) {
          countLetters++;
          break;
        }
      }
    }
    if (countLetters === fieldText.length) {
      isValid = true;
    }
  }
  return isValid;
};

theForm.addEventListener('submit', function(event){
  event.preventDefault();
  var inputField = document.getElementById('firstname');
  if (validateName(inputField.value)) {
    inputField.className = '';
    var listItem = document.createElement('li');
    listItem.textContent = inputField.value;
    formResults.appendChild(listItem);
  } else {
    inputField.className = 'error';
  }
}, false);
