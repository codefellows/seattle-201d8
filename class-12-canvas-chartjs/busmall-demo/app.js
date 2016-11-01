'use strict';

var allProducts = [];
var totalClicks = 0;
var clickLim = 25;

function Product(fname){
  this.fname = 'img/' + fname;
  this.name = '';
  this.shown = 0;
  this.clicks = 0;
  this.generateName = function(){
    var splitname = fname.split('.')[0];
    var splitdash = splitname.split('-');
    for (var i = 0; i < splitdash.length; i++){
      var letters = splitdash[i].split('');
      letters[0] = letters[0].toUpperCase();
      splitdash[i] = letters.join('');
    }
    this.name = splitdash.join(' ');
  };
  this.generateName();
  allProducts.push(this);
};

for (var i = 0; i < images.length; i++) {
  new Product(images[i]);
}

function randomNum(){
  return Math.floor(Math.random() * allProducts.length);
};

var oldIndices = [];

function getRandomImages(event){
  totalClicks++;

  // If this function was run because of a click, get the index off of the
  // img tag for that product, and increase its own number of clicks
  if (event) {
    var clickedProductIdx = parseInt(event.target.alt);
    allProducts[clickedProductIdx].clicks++;
  }

  // Get all the clickable image tags
  var imgTags = document.getElementsByClassName('clickable');

  // This will be the array holding my random indexes
  var indices = [];

  // For every image that I want to fill, get a random index
  for (var i = 0; i < imgTags.length; i++){
    var idx = randomNum();
    // To prevent duplicates!
    // If the index I've generated has just been seen, or is already in my
    // array of indices to be shown, regenerate the index
    while (indices.indexOf(idx) !== -1 || oldIndices.indexOf(idx) !== -1) {
      idx = randomNum();
    }
    // Put the newly-generated index in the indices array
    indices[i] = idx;
  }

  // The newly generated indices need to be kept for checking on the next click
  oldIndices = indices;

  // This array will hold the products that will be seen on the page
  var productsToBeSeen = [];

  // Loop through my randomly-generated indices and get the products associated
  // then increase their times shown by 1
  for (var i = 0; i < indices.length; i++){
    var thisIdx = indices[i];
    productsToBeSeen[i] = allProducts[thisIdx];
    allProducts[thisIdx].shown++;
  }

  // Loop through the image tags that I want to fill
  // Fill each one's 'src' attribute with the filename of each product
  // Store the index corresponding to that product in the 'alt' attribute of
  // the image.
  for (var i = 0; i < imgTags.length; i++){
    imgTags[i].setAttribute('src', productsToBeSeen[i].fname);
    imgTags[i].setAttribute('alt', indices[i]);
  }

  // If my total clicks have reached or exceeded my click limit, remove
  // this event handler from the image tags
  if (totalClicks >= clickLim) {
    // Loop over the image tags, and remove the handler
    for (var i = 0; i < imgTags.length; i++) {
      imgTags[i].removeEventListener('click', getRandomImages);
    }

    // Display info of times clicked vs times shown
    var clickInfo = document.getElementById('click-info');

    // I want a list of information
    var ul = document.createElement('ul');
    clickInfo.appendChild(ul);

    // For every product, list its click and shown info
    for (var i = 0; i < allProducts.length; i++){
      var thisProduct = allProducts[i];
      var li = document.createElement('li');
      var fillerInfo = '';
      fillerInfo += thisProduct.name;
      if (thisProduct.shown === 0) {
        fillerInfo += ' | Click Rate: 0%';
      } else {
        fillerInfo += ' | Click Rate: ' + (thisProduct.clicks / thisProduct.shown * 100) + '%';
      }
      li.innerText = fillerInfo;
      ul.appendChild(li);
    }
  }
};

// Run this function to generate initial images
getRandomImages();
// The above function increases my total clicks by one, so remove one.
totalClicks--;

// Add an event listener for clicking on any images
var imgTags = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTags.length; i++){
  imgTags[i].addEventListener('click', getRandomImages);
}

// Utility function for seeing what's been shown and what's been clicked
function productsShown(){
  for (var i = 0; i < allProducts.length; i++) {
    console.log(allProducts[i].name + ' shown ' + allProducts[i].shown + ' times.');
    console.log(allProducts[i].name + ' clicked ' + allProducts[i].clicks + ' times.');
  }
}
