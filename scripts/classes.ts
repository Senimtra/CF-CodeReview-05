// ### Set HTML-anchor ###

let contentAll = document.getElementById("contentAll");

// ### Create Object arrays for classes (Locations, Restaurants, Events) ###

let locArray = [];
let restArray = [];
let eveArray = [];

// ### Create Parent class Locations with properties (name(object), city, zip, address, image) ###

class Locations {
  object: string;
  city: string;
  zipCode: number;
  address: string;
  image: string;
  constructor(object, city, zipCode, address, image) {
    this.object = object;
    this.city = city;
    this.zipCode = zipCode;
    this.address = address;
    this.image = image;
    locArray.push(this);
  }
  display() {
    contentAll.innerHTML += `<div class='card col-sm-3 my-3 mx-auto' style='max-width: 540px'><img src='${this.image}' class='card-img-top' alt=''><div class='card-body'><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}<br>${this.address}</p></div></div>`;
  }

  // display() {
  //   contentAll.innerHTML += `<div class='card col-3' style='width: 18rem;'><img src='${this.image}' class='card-img-top' alt=''><div class='card-body'><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}<br>${this.address}</p></div></div>`;
  // }
}

// ### Create Child class Restaurants with properties (phone-number, cuisine, web-address) ###

class Restaurants extends Locations {
  phone: string;
  cuisine: string;
  web: string;
  constructor(object, city, zipCode, address, image, phone, cuisine, web) {
    super(object, city, zipCode, address, image);
    this.phone = phone;
    this.cuisine = cuisine;
    this.web = web;
    restArray.push(this);
  }
  display() {
    contentAll.innerHTML += `<div class='card col-sm-3 my-3 mx-auto' style='max-width: 540px'><img src='${this.image}' class='card-img-top' alt=''><div class='card-body'><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}<br>${this.address}<br>${this.phone}<br>${this.cuisine} cuisine<br>${this.web}</p></div></div>`;
  }
}

// ### Create Child class Events with properties (date, time, ticket-price) ###

class Events extends Locations {
  date: string;
  time: string;
  price: string;
  constructor(object, city, zipCode, address, image, date, time, price) {
    super(object, city, zipCode, address, image);
    this.date = date;
    this.time = time;
    this.price = price;
    eveArray.push(this);
  }
  display() {
    contentAll.innerHTML += `<div class='card col-sm-3 my-3 mx-auto' style='max-width: 540px'><img src='${this.image}' class='card-img-top' alt=''><div class='card-body'><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}<br>${this.address}<br>${this.date}, ${this.time}<br>${this.price}</p></div></div>`;
  }
}
