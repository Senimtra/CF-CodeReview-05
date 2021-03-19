// ### Remove double objects from Locations array ###

locArray = locArray.filter(function (val) {
  return !restArray.includes(val);
});
locArray = locArray.filter(function (val) {
  return !eveArray.includes(val);
});

// ### Create Header-bar Localisations ###
function firstHeader() {
  content.innerHTML =
    "<div class='col-12 bg-dark d-flex justify-content-between'><div>What's going on in New York ...</div><div>locations</div></div>";
}
firstHeader();
// ### Loop function to create Location cards ###
function displayLocCards() {
  for (var i = 0; i < locArray.length; i++) {
    locArray[i].display();
  }
}
displayLocCards();
// ### Create Header-bar Restaurants ###
function secondHeader() {
  content.innerHTML +=
    "<div class='col-12 bg-dark d-flex justify-content-between'><div>What's going on in New York ...</div><div>restaurants</div></div>";
}
secondHeader();
// ### Loop function to create Restaurant cards ###
function displayRestCards() {
  for (var i = 0; i < restArray.length; i++) {
    restArray[i].display();
  }
}
displayRestCards();
// ### Create Header-bar Events ###
function thirdHeader() {
  content.innerHTML +=
    "<div class='col-12 bg-dark d-flex justify-content-between'><div>What's going on in New York ...</div><div>events</div></div>";
}
thirdHeader();
// ### Loop function to create Event cards ###
function displayEveCards() {
  for (var i = 0; i < eveArray.length; i++) {
    eveArray[i].display();
  }
}
displayEveCards();
console.log(locArray);
console.log(restArray);
console.log(eveArray);
// ### NOW for the sorting
function sortBigDate() {
  var mergeLocRest = locArray.concat(restArray);
  var mergeArray = mergeLocRest.concat(eveArray);
  var sortByDate = function (mergeArray) {
    var sorter = function (a, b) {
      return new Date(a.visited).getTime() - new Date(b.visited).getTime();
    };
    mergeArray.sort(sorter);
  };
  sortByDate(mergeArray);
  console.table(mergeArray);
}
sortBigDate();
