// ### Create Location objects ###
var charlesChurch = new Locations("Charles Church", "Vienna", 1010, "Karlsplatz 1", "./images/place_charleschurch.jpg");
var zooVienna = new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "./images/place_zoovienna.jpg");
// ### Create Restaurant objects ###
var lemonLeaf = new Restaurants("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "./images/rest_lemonleaf.png", "+43(1)5812308", "Thai", "www.lemonleaf.at");
var sixta = new Restaurants("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "./images/rest_sixta.png", "+43 1 58 528 56", "Viennese", "www.sixta-restaurant.at");
//### Loop function to create Location cards ###
function displayLocCards() {
    for (var i = 0; i < locArray.length; i++) {
        locArray[i].display();
    }
}
displayLocCards();
//////////////// TEST
console.log(locArray);
// console.table(locArray);
// for (let val of locArray) {
//   document.getElementById("content").innerHTML += val.display();
// }
