// ### Remove double objects from Locations array ###

locArray = locArray.filter((val) => !restArray.includes(val));
locArray = locArray.filter((val) => !eveArray.includes(val));

// ### Create Header-bar Locations ###

function firstHeader() {
  content.innerHTML =
    "<div class='col-12 bg-dark d-flex justify-content-between'><div>What's going on in New York ...</div><div>locations</div></div>";
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
    "<div class='col-12 bg-dark d-flex justify-content-between'><div>What's going on in New York ...</div><div>restaurants</div></div>";
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
    "<div class='col-12 bg-dark d-flex justify-content-between'><div>What's going on in New York ...</div><div>events</div></div>";
}

thirdHeader();

// ### Loop function to create Event cards ###

function displayEveCards() {
  for (let i = 0; i < eveArray.length; i++) {
    eveArray[i].display();
  }
}

displayEveCards();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// ### Merge + Sort function (time/date) ###

// function sortBigDate() {

// }

// ### Add EventListener to dropdown-menu (Ascending/Descending/Revert) ###

let ascButton = document.getElementById("ascending");
ascButton.addEventListener("click", dispAscend);

let dscButton = document.getElementById("descending");
dscButton.addEventListener("click", dispDescend);

let revButton = document.getElementById("revert");
revButton.addEventListener("click", revert);

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

function revert() {
  firstHeader();
  displayLocCards();
  secondHeader();
  displayRestCards();
  thirdHeader();
  displayEveCards();
}

// function dispDescend() {
//   content.textContent = "";
// }

// console.log(locArray);
// console.log(restArray);
// console.log(eveArray);
