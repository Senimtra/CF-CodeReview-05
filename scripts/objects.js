// ### Create Location objects ###
var centralPark = new Locations("Central Park", "Manhattan, NY", 10019, "200 Central Park", "./images/loc_centralpark.jpg", "Jan 03 2021 02:22:07 PM");
var statueLiberty = new Locations("Statue of Liberty", "Manhattan, NY", 10004, "Liberty Island, New York Harbor", "./images/loc_statueliberty.jpg", "Jan 07 2021 08:55:10 AM");
var empireState = new Locations("Empire State Building", "Manhattan, NY", 10118, "350 Fifth Avenue", "./images/loc_empirestate.jpg", "May 19 2020 11:06:01 PM");
var timesSquare = new Locations("Times Square", "Manhattan, NY", 10036, "Times Square Blvd", "./images/loc_timessquare.jpg", "Aug 26 2020 07:52:47 PM");
var museumModern = new Locations("Museum of Modern Art", "Manhattan, NY", 10019, "11 W 53rd Street", "./images/loc_museummodern.jpg", "Mar 27 2020 09:54:25 PM");
var brooklynBridge = new Locations("Brooklyn Bridge", "Northwest Brooklyn, NY", 11201, "Brooklyn Bridge Road", "./images/loc_brooklynbridge.jpg", "May 10 2020 10:48:51 AM");
var rockeCenter = new Locations("Rockefeller Center", "Manhattan, NY", 10112, "Rockefeller Plaza", "./images/loc_rockecenter.jpg", "Oct 18 2020 11:14:11 PM");
var guggenheim = new Locations("Guggenheim Museum", "Manhattan, NY", 10128, "1071 5th Avenue", "./images/loc_guggenheim.jpg", "Jul 19 2020 08:47:36 PM");
// ### Create Restaurant objects ###
var bigPalace = new Restaurants("The Big Palace", "Manhattan, NY", 10956, "29 3rd Street #203", "./images/rest_bigpalace.jpg", "Aug 22 2020 06:13:45 PM", "(509) 279-0762", "Indonesian", "www.bigpalace.dot");
var shazam = new Restaurants("Shazam", "New Hartford, NY", 13413, "24 Kellog Road", "./images/rest_shazam.jpg", "Dec 22 2020 08:37:44 PM", "(508) 561-9818", "Thai", "www.shazam.dot");
var kingsize = new Restaurants("King Size", "South Fallsburg, NY", 12779, "4845 Transit Road", "./images/rest_kingsize.jpg", "Sep 23 2020 01:21:05 PM", "(508) 890-5592", "American", "www.kingsize.dot");
var modesty = new Restaurants("Modesty", "Binghamton, NY", 13901, "25 Robinson Street", "./images/rest_modesty.jpg", "Nov 04 2020 06:27:18 PM", "(607) 203-1281", "Spanish", "www.modesty.dot");
var arcticDeer = new Restaurants("The Arctic Deer", "Flushing, NY", 15050, "34th Avenue", "./images/rest_arcticdeer.jpg", "Jun 11 2020 04:14:55 PM", "(772) 334-3096", "American", "www.thearcticdeer.dot");
var tomsDiner = new Restaurants("Tom's Diner", "Farmingdale, NY", 11735, "61 Executive Blvd", "./images/rest_tomsdiner.jpg", "Dec 03 2020 07:33:34 PM", "(780) 488-1163", "French", "www.tomsdiner.dot");
var karmaFarmer = new Restaurants("Karma Farmer", "Woodside, NY", 11377, "4856 44th Street", "./images/rest_karmafarmer.jpg", "Jan 14 2021 08:40:11 PM", "(410) 244-6280", "Indian", "www.karmafarmer.dot");
var anyamanee = new Restaurants("Anyamanee", "Port Washington, NY", 11050, "464 Main Street", "./images/rest_anyamanee.jpg", "Feb 01 2021 09:27:07 PM", "(413) 269-4095", "Thai", "www.anyamanee.dot");
// ### Create Event objects ###
var circus = new Events("The Whimsical Circus", "Albany, NY", 12206, "Stapleton Center, 397 Orange St", "./images/eve_circus.jpg", "Aug 08 2020 03:16:21 PM", "Fr., 12/15/2021", "8 p.m.", "$ 69.00");
var baseball = new Events("World Series MLB", "Newark, NY", 12550, "Yankee Stadium, 321 Pine St", "./images/eve_baseball.jpg", "Oct 12 2020 10:56:18 AM", "Sat., 09/12/2021", "4 p.m.", "$ 55.00");
var festival = new Events("Festival 36", "Levittown, NY", 11756, "West Fields, 36 Vincent Blvd", "./images/eve_festival.jpg", "Aug 14 2020 09:03:07 PM", "Fr., 04/17/2022", "9 p.m.", "$ 80.00");
var gallery = new Events("Art Exhibition", "Waterville, NY", 13480, "131 Osborne Ave", "./images/eve_gallery.jpg", "Dec 28 2020 04:22:59 PM", "Sat., 09/15/2021", "4 p.m.", "$ 55.00");
var congress = new Events("World Healthcare Meeting", "Manhattan, NY", 10083, "Madison Square Garden", "./images/eve_congress.jpg", "May 19 2020 02:24:18 PM", "Mon., 05/03/2021", "9 a.m.", "$ 40.00");
var concert = new Events("The 4 Live Crew", "Albion, NY", 14411, "Gaines Waterport Rd", "./images/eve_concert.jpg", "Feb 23 2021 08:10:01 PM", "Wed., 08/30/2021", "7 p.m.", "$ 65.00");
var nascar = new Events("Nascar NY 300", "Greenwood Lake, NY", 12572, "Grand Oval, 882 Swede Rd", "./images/eve_nascar.jpg", "Jul 17 2020 04:33:14 PM", "Sun., 10/22/2021", "4 p.m.", "$ 55.00");
var webdev = new Events("Webdeveloper World", "Queens Village, NY", 11427, "Leigh Halls, 155th Ave", "./images/eve_webdev.jpg", "May 08 2020 09:25:00 AM", "Fr., 06/11/2021", "10 p.m.", "$ 75.00");
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
        locArray[i].displayLoc();
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
        restArray[i].displayRest();
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
        eveArray[i].displayEve();
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
console.table(restArray);
