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
  "./images/rest_bigpalace.jpg",
  "(509) 279-0762",
  "Indonesian",
  "www.bigpalace.dot"
);

let shazam = new Restaurants(
  "Shazam",
  "New Hartford, NY",
  13413,
  "24 Kellog Road",
  "./images/rest_shazam.jpg",
  "(508) 561-9818",
  "Thai",
  "www.shazam.dot"
);

let kingsize = new Restaurants(
  "King Size",
  "South Fallsburg, NY",
  12779,
  "4845 Transit Road",
  "./images/rest_kingsize.jpg",
  "(508) 890-5592",
  "Spanish",
  "www.kingsize.dot"
);

let modesty = new Restaurants(
  "Modesty",
  "Binghamton, NY",
  13901,
  "25 Robinson Street",
  "./images/rest_modesty.jpg",
  "(607) 203-1281",
  "American",
  "www.modesty.at"
);

let arcticDeer = new Restaurants(
  "The Arctic Deer",
  "Flushing, NY",
  15050,
  "34th Avenue",
  "./images/rest_arcticdeer.jpg",
  "(772) 334-3096",
  "American",
  "www.thearcticdeer.at"
);

let Crown = new Restaurants(
  "The Crown",
  "Farmingdale, NY",
  11735,
  "61 Executive Blvd",
  "./images/rest_thecrown.jpg",
  "(780) 488-1163",
  "French",
  "www.thecrown.dot"
);

let karmaFarmer = new Restaurants(
  "Karma Farmer",
  "Woodside, NY",
  11377,
  "4856 44th Street",
  "./images/rest_karmafarmer.jpg",
  "(410) 244-6280",
  "Indian",
  "www.karmafarmer.dot"
);

let theOak = new Restaurants(
  "The Oak",
  "Port Washington, NY",
  11050,
  "464 Main Street",
  "./images/rest_theoak.jpg",
  "(413) 269-4095",
  "Thai",
  "www.theoak.dot"
);

// ### Create Event objects ###

let circus = new Events(
  "The Whimsical Circus",
  "Albany, NY",
  12206,
  "Stapleton Center, 397 Orange St",
  "./images/eve_circus.jpg",
  "Fr., 12/15/2021",
  "8 p.m.",
  "$ 69.00"
);

let baseball = new Events(
  "Yankee Stadium",
  "Newark, NY",
  12550,
  "Yankee Stadium, 321 Pine St",
  "./images/eve_baseball.jpg",
  "Sat., 09/12/2021",
  "4 p.m.",
  "$ 55.00"
);

let festival = new Events(
  "Festival 36",
  "Levittown, NY",
  11756,
  "West Fields, 36 Vincent Blvd",
  "./images/eve_festival.jpg",
  "Fr., 04/17/2022",
  "9 p.m.",
  "$ 80.00"
);

let gallery = new Events(
  "Art Exhibition",
  "Waterville, NY",
  13480,
  "131 Osborne Ave",
  "./images/eve_gallery.jpg",
  "Sat., 09/15/2021",
  "4 p.m.",
  "$ 55.00"
);

let congress = new Events(
  "World Healthcare Meeting",
  "Manhattan, NY",
  10083,
  "Madison Square Garden",
  "./images/eve_congress.jpg",
  "Mon., 05/03/2021",
  "9 a.m.",
  "$ 40.00"
);

let concert = new Events(
  "The 4 Live Crew",
  "Albion, NY",
  14411,
  "Gaines Waterport Rd",
  "./images/eve_concert.jpg",
  "Wed., 08/30/2021",
  "7 p.m.",
  "$ 65.00"
);

let nascar = new Events(
  "Nascar NY 300",
  "Greenwood Lake, NY",
  12572,
  "Grand Oval, 882 Swede Rd",
  "./images/eve_nascar.jpg",
  "Sun., 10/22/2021",
  "4 p.m.",
  "$ 55.00"
);

let webdev = new Events(
  "Webdeveloper World",
  "Queens Village, NY",
  11427,
  "Leigh Halls, 155th Ave",
  "./images/eve_webdev.jpg",
  "Fr., 06/11/2021",
  "10 p.m.",
  "$ 75.00"
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
