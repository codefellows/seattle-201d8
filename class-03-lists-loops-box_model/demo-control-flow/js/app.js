/*
LET'S VIEW THESE IN THE TEXT
p.148 	Decision making
p.149 	Evaluating conditionals & conditional statements
p.150 	Comparison operators: evaluating conditions
p.152 	Structuring comparison operators
p.156 	Logical operators
*/

// p.160 	‘If’ statements
// p.162 	‘If...else’ statements

// IF statements can stand alone with no ELSE
if (3 > 5) {
  console.log('WTF');
}

// IF statements can have a single else
if ('something is true') {
  // do this;
  // do that;
  // keep doing things;
} else {
  // do some other stuff;
  // and continue doing other stuff;
}

// Then there is IF and ELSE IF and ELSE...
// ... where there can be unlimited ELSE IFs

if ('something is true') {
  // do this;
  // do that;
  // keep doing things;
} else if ('this other thing is true') {
  // do some other stuff;
  // and continue doing other stuff;
} else {
  // do this thing to catch leftovers;
}

// Watch out for the most common error in IF statements...
// ... the false positive, often because of...
// ... using the assignment operator =, instead of ===

// p.164 	‘Switch’ statements
// This is a minefield of opinions

// LET'S VIEW THESE IN THE TEXT
// p.167 	Truthy & falsy values
// p.168 	Checking equality & existence
// p.169 	Short circuit values

// p.170 	Loops & loop counters
// p.172 	Looping
// p.174 	Key loop concepts (‘break’, ‘continue’)
// p.175 	Using ‘for’ loops

var samsPets = ['Buddy', 'Alistair', 'Trillian', 'Demi', 'Parker'];
//
for (var i = 0; i < samsPets.length; i++) {
  console.log(samsPets[i]);
}

// p.176 	Using ‘while’ loops
var nadia = 0;
while (nadia !== 26) {
  var nadia = parseInt(prompt('How old is Nadia?'));
}
console.log('Nadia is awesome');

var counter = 0;
while(counter < samsPets.length) {
  console.log(samsPets[counter]);
  counter += 1;
}

// p.177 	Using ‘do...while’ loops */
