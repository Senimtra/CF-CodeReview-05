// ### Remove double objects from Locations array ###

locArray = locArray.filter((val) => !restArray.includes(val));
locArray = locArray.filter((val) => !eveArray.includes(val));

// ### Create Header-bar Locations ###

function firstHeader() {
  content.innerHTML =
    "<div class='card headerOut p-0 my-3'><div class='headerIn px-2 my-1 d-flex justify-content-between'>The city never sleeps ... <img src='./images/skyline_header.png'><div>... / locations</div></div";
}

firstHeader();

// ### Loop function to create Location cards ###

function displayLocCards() {
  for (let i = 0; i < locArray.length; i++) {
    locArray[i].display();
  }
}

displayLocCards();

// ### Create Header-bar Restaurants ###

function secondHeader() {
  content.innerHTML +=
    "<div class='card headerOut p-0 my-3'><div class='headerIn px-2 my-1 d-flex justify-content-between'>New York, New York ...<img src='./images/skyline_header.png'><div>... / restaurants</div></div";
}

secondHeader();

// ### Loop function to create Restaurant cards ###

function displayRestCards() {
  for (let i = 0; i < restArray.length; i++) {
    restArray[i].display();
  }
}

displayRestCards();

// ### Create Header-bar Events ###

function thirdHeader() {
  content.innerHTML +=
    "<div class='card headerOut p-0 my-3'><div class='headerIn px-2 my-1 d-flex justify-content-between'>Welcome to the big apple ...<img src='./images/skyline_header.png'><div>... / events</div></div";
}

thirdHeader();

// ### Loop function to create Event cards ###

function displayEveCards() {
  for (let i = 0; i < eveArray.length; i++) {
    eveArray[i].display();
  }
}

displayEveCards();

//////////////////////////////////
// ### Adding EventListener ### //
//////////////////////////////////

// ### Add EventListener to Home-button

let home = document.getElementById("home");
home.addEventListener("click", revert);

// ### Add EventListener to dropdown-menu (Ascending/Descending/Revert) ###

let ascButton = document.getElementById("ascending");
ascButton.addEventListener("click", dispAscend);

let dscButton = document.getElementById("descending");
dscButton.addEventListener("click", dispDescend);

let revButton = document.getElementById("revert");
revButton.addEventListener("click", revert);

//////////////////////////////////////////////
// ### Sorting all objects by time/date ### //
//////////////////////////////////////////////

// ### Ascending function (Merge arrays, sort, clear content, new content) ###

function dispAscend() {
  content.textContent = "";

  let mergeLocRest = locArray.concat(restArray);
  let mergeArray = mergeLocRest.concat(eveArray);
  let sortByDate = (mergeArray) => {
    let sorter = (a, b) => {
      return new Date(a.visited).getTime() - new Date(b.visited).getTime();
    };
    mergeArray.sort(sorter);
  };
  sortByDate(mergeArray);
  for (let i = 0; i < mergeArray.length; i++) {
    mergeArray[i].display();
  }
}

// ### Descending function (Merge arrays, sort, clear content, new content) ###

function dispDescend() {
  content.textContent = "";

  let mergeLocRest = locArray.concat(restArray);
  let mergeArray = mergeLocRest.concat(eveArray);
  let sortByDate = (mergeArray) => {
    let sorter = (a, b) => {
      return new Date(b.visited).getTime() - new Date(a.visited).getTime();
    };
    mergeArray.sort(sorter);
  };
  sortByDate(mergeArray);
  for (let i = 0; i < mergeArray.length; i++) {
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
