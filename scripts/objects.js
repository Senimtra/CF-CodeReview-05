// ### Create Object arrays (Locations, Restaurants, Events) ###
var locArray = [];
var restArray = [];
var eventArray = [];
// ### Create Location objects ###
var charlesChurch = new Locations("Charles Church", "Vienna", 1010, "Karlsplatz 1", "./images/place_charleschurch.jpg");
var zooVienna = new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "./images/place_zoovienna.jpg");
// ### Loop function to create Location cards ###
function displayLocCards() {
    for (var i = 0; i < locArray.length; i++) {
        locArray[i].display();
    }
}
displayLocCards();
////////////////// TEST
console.log(locArray);
