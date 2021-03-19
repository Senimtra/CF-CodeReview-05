// ### Set HTML-anchor ###

let content = document.getElementById("content");

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
  visited: string;
  constructor(object, city, zipCode, address, image, visited) {
    this.object = object;
    this.city = city;
    this.zipCode = zipCode;
    this.address = address;
    this.image = image;
    this.visited = visited;
    locArray.push(this);
  }
  display() {
    content.innerHTML += `<div class='card col-lg-3 col-md-6'>
    
    <img src='${this.image}' class='card-img-top d-none d-md-block' alt=''>
    
    <div class='card-body d-flex justify-content-between'>    
    <div><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}<br>${this.address}</p></div>
        
    <div class="visited"><i>created:<br>${this.visited}</i></div></div>
    
    </div>`;
  }
}

// ### Create Child class Restaurants with properties (phone-number, cuisine, web-address) ###

class Restaurants extends Locations {
  phone: string;
  cuisine: string;
  web: string;
  constructor(
    object,
    city,
    zipCode,
    address,
    image,
    visited,
    phone,
    cuisine,
    web
  ) {
    super(object, city, zipCode, address, image, visited);
    this.phone = phone;
    this.cuisine = cuisine;
    this.web = web;
    restArray.push(this);
  }
  display() {
    content.innerHTML += `<div class='card col-lg-3 col-md-6'>
    
    <img src='${this.image}' class='card-img-top d-none d-md-block' alt=''>
    
    <div class='card-body d-flex justify-content-between'>
    
    <div><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}<br>${this.address}<br>${this.phone}<br>${this.cuisine} cuisine<br>${this.web}</p></div>

    <div class="visited"><i>created:<br>${this.visited}</i></div></div>
  
    </div>`;
  }
}

// ### Create Child class Events with properties (date, time, ticket-price) ###

class Events extends Locations {
  date: string;
  time: string;
  price: string;
  constructor(
    object,
    city,
    zipCode,
    address,
    image,
    visited,
    date,
    time,
    price
  ) {
    super(object, city, zipCode, address, image, visited);
    this.date = date;
    this.time = time;
    this.price = price;
    eveArray.push(this);
  }
  display() {
    content.innerHTML += `<div class='card col-lg-3 col-md-6'>
    
    <img src='${this.image}' class='card-img-top d-none d-md-block' alt=''>
    
    <div class='card-body d-flex justify-content-between'>
    
    <div><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}<br>${this.address}<br>${this.date}, ${this.time}<br>${this.price}</div>

    <div class="visited"><i>created:<br>${this.visited}</i></div></div>
  
    </div>`;
  }
}
