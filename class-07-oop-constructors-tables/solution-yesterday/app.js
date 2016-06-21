// Partial solution to Day 6 assignment

var hours = ['6:00am', '7:00am', '8:00am', '9:00am'];

var firstAndPike = {
  locationName: 'First and Pike',
  identifier: 'firstandpike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0 // let us use += later
};

firstAndPike.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    var custForEachHour = Math.floor(Math.random() * (firstAndPike.maxCustPerHour - firstAndPike.minCustPerHour + 1)) + firstAndPike.minCustPerHour;
    firstAndPike.custEachHourArray.push(custForEachHour);
  }
};

firstAndPike.calcCookiesEachHour = function() {
  firstAndPike.calcCustEachHour();
  for(var i = 0; i < hours.length; i++) {
    var cookiesForEachHour = Math.floor(firstAndPike.custEachHourArray[i] * firstAndPike.avgCookiesPerCust);
    firstAndPike.cookiesEachHourArray.push(cookiesForEachHour);
    firstAndPike.totalDailyCookieSales += cookiesForEachHour;
  }
};

firstAndPike.render = function() {
  firstAndPike.calcCookiesEachHour();
  for(var i = 0; i < hours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = firstAndPike.cookiesEachHourArray[i];
    var pikeList = document.getElementById('pike');
    pikeList.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total for the day: ' + firstAndPike.totalDailyCookieSales;
  pikeList.appendChild(totalListItem);
};

firstAndPike.render();
