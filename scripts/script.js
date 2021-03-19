// ### Set HTML-anchor ###
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var content = document.getElementById("content");
// ### Create Parent class Locations with properties (name(object), city, zip, address, image) ###
var Locations = /** @class */ (function () {
    function Locations(object, city, zipCode, address, image) {
        this.object = object;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        locArray.push(this);
    }
    Locations.prototype.display = function () {
        content.innerHTML = "<div class='card' style='width: 18rem;'><img src='" + this.image + "' class='card-img-top' alt=''><div class='card-body'><p class='card-text'>" + this.object + "<br>" + this.zipCode + " " + this.city + ", " + this.address + "</p></div></div>";
    };
    return Locations;
}());
// ### Create Child class Restaurants with properties (phone-number, cuisine, web-address) ###
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(object, city, zipCode, address, image, phone, cuisine, web) {
        var _this = _super.call(this, object, city, zipCode, address, image) || this;
        _this.phone = phone;
        _this.cuisine = cuisine;
        _this.web = web;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return this.display() + " Their phone number is " + this.phone + " and you can find examples of their delicious " + this.cuisine + " on their website: " + this.web;
    };
    return Restaurants;
}(Locations));
// ### Create Child class Events with properties (date, time, ticket-price) ###
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(object, city, zipCode, address, image, date, time, price) {
        var _this = _super.call(this, object, city, zipCode, address, image) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return this.display() + " The event will take place at " + this.time + " on " + this.date + ". The tickets will cost " + this.price + ".";
    };
    return Events;
}(Locations));
// ### Create Locations [array] ###
var locArray = [];
// ### Create Location objects ###
var charlesChurch = new Locations("Charles Church", "Vienna", 1010, "Karlsplatz 1", "./images/place_charleschurch.jpg");
var zooVienna = new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "./images/place_zoovienna.jpg");
locArray[0].display();
