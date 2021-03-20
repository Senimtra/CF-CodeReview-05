// ### Remove double objects from Locations array ###
locArray = locArray.filter(function (val) { return !restArray.includes(val); });
locArray = locArray.filter(function (val) { return !eveArray.includes(val); });
// ### Create Header-bar Locations ###
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
//////////////////////////////////
// ### Adding EventListener ### //
//////////////////////////////////
// ### Add EventListener to Home-button
var home = document.getElementById("home");
home.addEventListener("click", revert);
// ### Add EventListener to dropdown-menu (Ascending/Descending/Revert) ###
var ascButton = document.getElementById("ascending");
ascButton.addEventListener("click", dispAscend);
var dscButton = document.getElementById("descending");
dscButton.addEventListener("click", dispDescend);
var revButton = document.getElementById("revert");
revButton.addEventListener("click", revert);
//////////////////////////////////////////////
// ### Sorting all objects by time/date ### //
//////////////////////////////////////////////
// ### Ascending function (Merge arrays, sort, clear content, new content) ###
function dispAscend() {
    content.textContent = "";
    var mergeLocRest = locArray.concat(restArray);
    var mergeArray = mergeLocRest.concat(eveArray);
    var sortByDate = function (mergeArray) {
        var sorter = function (a, b) {
            return new Date(a.visited).getTime() - new Date(b.visited).getTime();
        };
        mergeArray.sort(sorter);
    };
    sortByDate(mergeArray);
    for (var i = 0; i < mergeArray.length; i++) {
        mergeArray[i].display();
    }
}
// ### Descending function (Merge arrays, sort, clear content, new content) ###
function dispDescend() {
    content.textContent = "";
    var mergeLocRest = locArray.concat(restArray);
    var mergeArray = mergeLocRest.concat(eveArray);
    var sortByDate = function (mergeArray) {
        var sorter = function (a, b) {
            return new Date(b.visited).getTime() - new Date(a.visited).getTime();
        };
        mergeArray.sort(sorter);
    };
    sortByDate(mergeArray);
    for (var i = 0; i < mergeArray.length; i++) {
        mergeArray[i].display();
    }
}
// ### Reverting function (just rebuilding from the arrays) ###
function revert() {
    firstHeader();
    displayLocCards();
    secondHeader();
    displayRestCards();
    thirdHeader();
    displayEveCards();
}
// console.log(locArray);
// console.log(restArray);
// console.log(eveArray);
