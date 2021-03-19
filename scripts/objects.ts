// ### Create Object arrays (Locations, Restaurants, Events) ###

const locArray = [];
let restArray = [];
let eventArray = [];

// ### Create Location objects ###

let charlesChurch = new Locations(
  "Charles Church",
  "Vienna",
  1010,
  "Karlsplatz 1",
  "./images/place_charleschurch.jpg"
);

let zooVienna = new Locations(
  "Zoo Vienna",
  "Vienna",
  1130,
  "Maxingstraße 13b",
  "./images/place_zoovienna.jpg"
);

// ### Loop function to create Location cards ###

function displayLocCards() {
  for (let i = 0; i < locArray.length; i++) {
    locArray[i].display();
  }
}

displayLocCards();

////////////////// TEST

console.log(locArray);
