var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

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

function displayPics(){

}

function handlePicContainerClick() {
  console.log('Click on', event.target.id)
  // if(event.target.id === 'pic-container') {
  //   return alert('CLICK DIRECTLY ON A PICTURE!!!!!');
  // }
  // // console.log(event.target.id + ' was clicked');
  // for (var i = 0; i < allProducts.length; i++) {
  //   if (event.target.id === allProducts[i].name) {
  //     allProducts[i].clicks += 1;
  //     console.log(allProducts[i].name + ' has ' + allProducts[i].clicks + ' clicks');
  //   }
  // }

  displayPics();
}

picContainer.addEventListener('click', handlePicContainerClick);

displayPics();
