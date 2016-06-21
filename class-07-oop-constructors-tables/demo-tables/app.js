var allCats = [];

function Cat(name, color, tail) {
  this.name = name;
  this.color = color;
  this.tail = tail;
  allCats.push(this);
}

var bud = new Cat('Buddy', 'Orange and White', 'VERY long');
var alley = new Cat('Alistair', 'Orange', 'Small');
var trill = new Cat('Trillian', 'Black/Orange', 'Very small');
var meowmix = new Cat('Meow Mix', 'Black', 'Medium');
var toeny = new Cat('Toeny', 'Gray', 'Medium-Large');

for(var i = 0; i < allCats.length; i++) {
  console.log(allCats[i].name);
}

Cat.prototype.render = function() {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.color;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.tail;
  trEl.appendChild(tdEl);

  catTable.appendChild(trEl);
};

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>

  <tr>              create tr
    <th>Name</th>   create a th, give it content, add it to tr
    <th>Color</th>  create a th, give it content, add it to tr
    <th>Tail</th>   create a th, give it content, add it to tr
  </tr>             add tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

We'll need to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */

var catTable = document.getElementById('cats');
var trEl = document.createElement('tr');

// var thEl = document.createElement('th');
// thEl.textContent = 'Name';
// trEl.appendChild(thEl);
//
// var thEl = document.createElement('th');
// thEl.textContent = 'Color';
// trEl.appendChild(thEl);
//
// var thEl = document.createElement('th');
// thEl.textContent = 'Tail';
// trEl.appendChild(thEl);

var headerTitles = ['Name', 'Color', 'Tail'];
for (var i = 0; i < headerTitles.length; i++){
  var thEl = document.createElement('th');
  thEl.textContent = headerTitles[i];
  trEl.appendChild(thEl);
}
catTable.appendChild(trEl);

var nadia = new Cat('Nadia', 'pink', 'short');
for (var i = 0; i < allCats.length; i++){
  allCats[i].render();
}


// var catDataArray = [];
// for(var i = 0; i < allCats.length; i++) {
//   var oneKitteh = [];
//   oneKitteh.push(allCats[i].name);
//   oneKitteh.push(allCats[i].color);
//   oneKitteh.push(allCats[i].tail);
//   catDataArray.push(oneKitteh);
// }
//
//
// for (var i = 0; i < catDataArray.length; i++){
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = catDataArray[i][0];
//   trEl.appendChild(tdEl);
//   var tdEl = document.createElement('td');
//   tdEl.textContent = catDataArray[i][1];
//   trEl.appendChild(tdEl);
//   var tdEl = document.createElement('td');
//   tdEl.textContent = catDataArray[i][2];
//   trEl.appendChild(tdEl);
//   alert('KITTEH ADDED TO TABLE');
//   catTable.appendChild(trEl);
// }
