// Demo for objects-to-constructors

var alison = {
  course: '201d8',
  firstName: 'Alison',
  lastInitial: 'Z',
  faveNumber: 2,
  isCodeNinja: true,
  introduction: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 143 lines of code to model our class this way
// (13 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Jeff:

// Maybe I could take the desired object literal, and adapt it into a function that would make it?

// That's a constructor function. Let's make one right here.

// And what if I want somewhere to store all of these similar objects?
// var mahClass = [];
