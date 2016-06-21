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

// var alison = {     This line will go away
// Syntax changes:
    // add 'this' to each property
    // ':' become '='
    // ',' become ';'
// And, of course, provide parameters to pass in for properties that have unique values
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
  // 'this' refers to the object created by the constructor
  console.log('A object was created for', this.firstName);
  mahClass.push(this);
  console.table(mahClass);
}

var mahClass = [];
var alison = new Student('Alison', 'Z', 16);
var david = new Student('David', 'S', 19);

// This property is shared by all instances of Student
Student.prototype.favoriteTA = 'Nadia';

// David will not have this property
alison.middleInitial = 'K';
