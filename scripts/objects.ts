// ### Create Location objects ###

let centralPark = new Locations(
  "Central Park",
  "Manhattan, NY",
  10019,
  "200 Central Park S",
  "./images/loc_centralpark.jpg"
);

let statueLiberty = new Locations(
  "Statue of Liberty",
  "Manhattan, NY",
  10004,
  "Liberty Island, New York Harbor",
  "./images/loc_statueliberty.jpg"
);

let empireState = new Locations(
  "Empire State Building",
  "Manhattan, NY",
  10118,
  "350 Fifth Avenue",
  "./images/loc_empirestate.jpg"
);

let timesSquare = new Locations(
  "Times Square",
  "Manhattan, NY",
  10036,
  "Times Square Brm",
  "./images/loc_timessquare.jpg"
);

let museumModern = new Locations(
  "Museum of Modern Art",
  "Manhattan, NY",
  10019,
  "11 W 53rd Street",
  "./images/loc_museummodern.jpg"
);

let brooklynBridge = new Locations(
  "Brooklyn Bridge",
  "Northwest Brooklyn, NY",
  11201,
  "Brooklyn Bridge Road",
  "./images/loc_brooklynbridge.jpg"
);

let rockeCenter = new Locations(
  "Rockefeller Center",
  "Manhattan, NY",
  10112,
  "Rockefeller Plaza",
  "./images/loc_rockecenter.jpg"
);

let guggenheim = new Locations(
  "Guggenheim Museum",
  "Manhattan, NY",
  10128,
  "1071 5th Avenue",
  "./images/loc_guggenheim.jpg"
);

// ### Create Restaurant objects ###

let bigPalace = new Restaurants(
  "The Big Palace",
  "Manhattan, NY",
  10956,
  "29 3rd Street #203",
  "./images/rest_.png",
  "(509) 279-0762",
  "Indonesian",
  "www.bigpalace.dot"
);

let shazam = new Restaurants(
  "Shazam",
  "New Hartford, NY",
  13413,
  "24 Kellog Road",
  "./images/rest_.png",
  "(508) 561-9818",
  "Thai",
  "www.shazam.dot"
);

let kingsize = new Restaurants(
  "King Size",
  "South Fallsburg, NY",
  12779,
  "4845 Transit Road",
  "./images/rest_.png",
  "(508) 890-5592",
  "Spanish",
  "www.kingsize.dot"
);

let modesty = new Restaurants(
  "Modesty",
  "Binghamton, NY",
  13901,
  "25 Robinson Street",
  "./images/rest_.png",
  "(607) 203-1281",
  "Indian",
  "www.modesty.at"
);

let arcticDeer = new Restaurants(
  "The Arctic Deer",
  "Flushing, NY",
  15050,
  "34th Avenue",
  "./images/rest_.png",
  "(772) 334-3096",
  "American",
  "www.thearcticdeer.at"
);

let Crown = new Restaurants(
  "The Crown",
  "Farmingdale, NY",
  11735,
  "61 Executive Blvd",
  "./images/rest_.png",
  "(780) 488-1163",
  "French",
  "www.thecrown.dot"
);

let karmaFarmer = new Restaurants(
  "Karma Farmer",
  "Woodside, NY",
  11377,
  "4856 44th Street",
  "./images/rest_.png",
  "(410) 244-6280",
  "Indian",
  "www.karmafarmer.dot"
);

let theOak = new Restaurants(
  "The Oak",
  "Port Washington, NY",
  11050,
  "464 Main Street",
  "./images/rest_.png",
  "(413) 269-4095",
  "Thai",
  "www.theoak.dot"
);

// ### Create Event objects ###

let kristofferson = new Events(
  "Kris Kristofferson",
  "Vienna",
  1150,
  "Wiener Stadthalle, Halle F<br>Roland Rainer Platz 1",
  "./images/eve_kristofferson.jpg",
  "Fr., 15.11.2021",
  "20:00",
  "58,50 EUR"
);

let kravitz = new Events(
  "Lenny Kravitz",
  "Vienna",
  1150,
  "Wiener Stadthalle, Halle D<br>Roland Rainer Platz 1",
  "./images/eve_kravitz.jpg",
  "Sat., 09.12.2029",
  "19:30",
  "€ 47,80"
);

// ### Loop function to create Location cards ###

function displayLocCards() {
  for (let i = 0; i < locArray.length; i++) {
    locArray[i].display();
  }
}

displayLocCards();

// ### Remove Restaurant objects from Locations array ###

locArray = locArray.filter((val) => !restArray.includes(val));
locArray = locArray.filter((val) => !eveArray.includes(val));

console.log(locArray);
console.log(restArray);
console.log(eveArray);

//////////////// TEST

// console.table(locArray);

// console.table(locArray);
// for (let val of locArray) {
//   document.getElementById("content").innerHTML += val.display();
// }

// const listEvents = locArray.filter((e) => e.index.includes("Events"));

// array1 = array1.filter(val => !array2.includes(val));
