// ### Create Location objects ###
var centralPark = new Locations("Central Park", "Manhattan, NY", 10019, "200 Central Park", "./images/loc_centralpark.jpg");
var statueLiberty = new Locations("Statue of Liberty", "Manhattan, NY", 10004, "Liberty Island, New York Harbor", "./images/loc_statueliberty.jpg");
var empireState = new Locations("Empire State Building", "Manhattan, NY", 10118, "350 Fifth Avenue", "./images/loc_empirestate.jpg");
var timesSquare = new Locations("Times Square", "Manhattan, NY", 10036, "Times Square Blvd", "./images/loc_timessquare.jpg");
var museumModern = new Locations("Museum of Modern Art", "Manhattan, NY", 10019, "11 W 53rd Street", "./images/loc_museummodern.jpg");
var brooklynBridge = new Locations("Brooklyn Bridge", "Northwest Brooklyn, NY", 11201, "Brooklyn Bridge Road", "./images/loc_brooklynbridge.jpg");
var rockeCenter = new Locations("Rockefeller Center", "Manhattan, NY", 10112, "Rockefeller Plaza", "./images/loc_rockecenter.jpg");
var guggenheim = new Locations("Guggenheim Museum", "Manhattan, NY", 10128, "1071 5th Avenue", "./images/loc_guggenheim.jpg");
// ### Create Restaurant objects ###
var bigPalace = new Restaurants("The Big Palace", "Manhattan, NY", 10956, "29 3rd Street #203", "./images/rest_bigpalace.jpg", "(509) 279-0762", "Indonesian", "www.bigpalace.dot");
var shazam = new Restaurants("Shazam", "New Hartford, NY", 13413, "24 Kellog Road", "./images/rest_shazam.jpg", "(508) 561-9818", "Thai", "www.shazam.dot");
var kingsize = new Restaurants("King Size", "South Fallsburg, NY", 12779, "4845 Transit Road", "./images/rest_kingsize.jpg", "(508) 890-5592", "American", "www.kingsize.dot");
var modesty = new Restaurants("Modesty", "Binghamton, NY", 13901, "25 Robinson Street", "./images/rest_modesty.jpg", "(607) 203-1281", "Spanish", "www.modesty.dot");
var arcticDeer = new Restaurants("The Arctic Deer", "Flushing, NY", 15050, "34th Avenue", "./images/rest_arcticdeer.jpg", "(772) 334-3096", "American", "www.thearcticdeer.dot");
var tomsDiner = new Restaurants("Tom's Diner", "Farmingdale, NY", 11735, "61 Executive Blvd", "./images/rest_tomsdiner.jpg", "(780) 488-1163", "French", "www.tomsdiner.dot");
var karmaFarmer = new Restaurants("Karma Farmer", "Woodside, NY", 11377, "4856 44th Street", "./images/rest_karmafarmer.jpg", "(410) 244-6280", "Indian", "www.karmafarmer.dot");
var anyamanee = new Restaurants("Anyamanee", "Port Washington, NY", 11050, "464 Main Street", "./images/rest_anyamanee.jpg", "(413) 269-4095", "Thai", "www.anyamanee.dot");
// ### Create Event objects ###
var circus = new Events("The Whimsical Circus", "Albany, NY", 12206, "Stapleton Center, 397 Orange St", "./images/eve_circus.jpg", "Fr., 12/15/2021", "8 p.m.", "$ 69.00");
var baseball = new Events("World Series MLB", "Newark, NY", 12550, "Yankee Stadium, 321 Pine St", "./images/eve_baseball.jpg", "Sat., 09/12/2021", "4 p.m.", "$ 55.00");
var festival = new Events("Festival 36", "Levittown, NY", 11756, "West Fields, 36 Vincent Blvd", "./images/eve_festival.jpg", "Fr., 04/17/2022", "9 p.m.", "$ 80.00");
var gallery = new Events("Art Exhibition", "Waterville, NY", 13480, "131 Osborne Ave", "./images/eve_gallery.jpg", "Sat., 09/15/2021", "4 p.m.", "$ 55.00");
var congress = new Events("World Healthcare Meeting", "Manhattan, NY", 10083, "Madison Square Garden", "./images/eve_congress.jpg", "Mon., 05/03/2021", "9 a.m.", "$ 40.00");
var concert = new Events("The 4 Live Crew", "Albion, NY", 14411, "Gaines Waterport Rd", "./images/eve_concert.jpg", "Wed., 08/30/2021", "7 p.m.", "$ 65.00");
var nascar = new Events("Nascar NY 300", "Greenwood Lake, NY", 12572, "Grand Oval, 882 Swede Rd", "./images/eve_nascar.jpg", "Sun., 10/22/2021", "4 p.m.", "$ 55.00");
var webdev = new Events("Webdeveloper World", "Queens Village, NY", 11427, "Leigh Halls, 155th Ave", "./images/eve_webdev.jpg", "Fr., 06/11/2021", "10 p.m.", "$ 75.00");
// ### Remove double objects from Locations array ###
locArray = locArray.filter(function (val) { return !restArray.includes(val); });
locArray = locArray.filter(function (val) { return !eveArray.includes(val); });
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
//////////////// TEST
// console.table(locArray);
// console.table(locArray);
// for (let val of locArray) {
//   document.getElementById("content").innerHTML += val.display();
// }
// const listEvents = locArray.filter((e) => e.index.includes("Events"));
// array1 = array1.filter(val => !array2.includes(val));
