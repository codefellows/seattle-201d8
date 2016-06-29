var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var currentIndicies = [];

var allProducts = [];

var picNames = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog_duck', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + name + '.jpg';
}

for (var i = 0; i < picNames.length; i++) {
  allProducts.push(new Product(picNames[i]));
}

function randIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function makeThreeIndices(){

  var leftIndex = randIndex();
  priorIndicies = currentIndicies;
  while(leftIndex === currentIndicies[0] || leftIndex === currentIndicies[1] || leftIndex === currentIndicies[2]) {
    leftIndex = randIndex();
    // console.log('left index matched a prior image');
  }

  var centerIndex = randIndex();

  while(leftIndex === centerIndex || centerIndex === currentIndicies[0] || centerIndex === currentIndicies[1] || centerIndex === currentIndicies[2]) {
    centerIndex = randIndex();
    // console.log('center index matched a prior image');
  }

  var rightIndex = randIndex();

  while(rightIndex === leftIndex || rightIndex === centerIndex || rightIndex === currentIndicies[0] || rightIndex === currentIndicies[1] || rightIndex === currentIndicies[2]) {
    rightIndex = randIndex();
    // console.log('right index matched a prior image');
  }
  currentIndicies = [leftIndex, centerIndex, rightIndex];
  return currentIndicies;
}

function displayPics(){
  var indicies = makeThreeIndices();
  left.src = allProducts[indicies[0]].path;
  left.alt = allProducts[indicies[0]].name;
  allProducts[indicies[0]].views += 1;
  center.src = allProducts[indicies[1]].path;
  center.alt = allProducts[indicies[1]].name;
  allProducts[indicies[1]].views += 1;
  right.src = allProducts[indicies[2]].path;
  right.alt = allProducts[indicies[2]].name;
  allProducts[indicies[2]].views += 1;
}

function handlePicContainerClick() {
  console.log('Click on', event.target.alt);

  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].clicks += 1;
      console.log(allProducts[i].name + ' has ' + allProducts[i].clicks + ' clicks');
    }
  }

  displayPics();
}

picContainer.addEventListener('click', handlePicContainerClick);

displayPics();

for (var tests = 0; tests < 10000; tests++) {
  testIndicies = makeThreeIndices();
  console.log(tests + 1, 'tests');
  console.log(priorIndicies, testIndicies);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(priorIndicies[i], testIndicies[j]);
      if (priorIndicies[i] === testIndicies[j]) {
        alert('ERROR');
      }
    }
  }
  console.log('no error');
}
