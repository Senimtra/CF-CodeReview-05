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

// ### Create Restaurant objects ###

let lemonLeaf = new Restaurants(
  "Lemon Leaf",
  "Vienna",
  1050,
  "Kettenbrückengasse 19",
  "./images/rest_lemonleaf.png",
  "+43(1)5812308",
  "Thai",
  "www.lemonleaf.at"
);

let sixta = new Restaurants(
  "SIXTA",
  "Vienna",
  1050,
  "Schönbrunner Straße 21",
  "./images/rest_sixta.png",
  "+43 1 58 528 56",
  "Viennese",
  "www.sixta-restaurant.at"
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
