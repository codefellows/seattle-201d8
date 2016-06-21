// Demo for objects-to-constructors

var alison = {
  course: '201d8',
  firstName: 'Alison',
  lastInitial: 'Z',
  faveNumber: 16,
  isCodeNinja: true,
  introduction: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 143 lines of code to model our class this way
// (13 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make David:
// var alison = {
function Student(firstName, lastInitial, faveNumber) {
  this.course = '201d8';
  this.lastInitial = lastInitial;
  this.firstName = firstName;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.introduction = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  };
  // console.log('This is what THIS logs:', this);
  // alert('A object was created for ' + this.firstName);
  mahClass.push(this);
  // console.table(mahClass);
}


var mahClass = [];
var alison = new Student('Alison', 'Z', 16);
var david = new Student('David', 'S', 19);

Student.prototype.favoriteTA = 'Nadia';

alison.middleInitial = 'K';

// Maybe I could take the desired object literal, and adapt it into a function that would make it?

// That's a constructor function. Let's make one right here.

// And what if I want somewhere to store all of these similar objects?
