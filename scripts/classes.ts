// ### Set HTML-anchor ###

let content = document.getElementById("content");

// ### Create Object array ###

let locArray = [];

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
    content.innerHTML += `<div class='card' style='width: 18rem;'><img src='${this.image}' class='card-img-top' alt=''><div class='card-body'><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}, ${this.address}</p></div></div>`;
  }
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
  }
  display() {
    content.innerHTML += `<div class='card' style='width: 18rem;'><img src='${this.image}' class='card-img-top' alt=''><div class='card-body'><p class='card-text'>${this.object}<br>${this.zipCode} ${this.city}, ${this.address}${this.phone} <br> ${this.cuisine} cuisine<br>${this.web}</p></div></div>`;
  }
}

// ### Create Child class Events with properties (date, time, ticket-price) ###

class Events extends Locations {
  date: Date;
  time: TimeRanges;
  price: PaymentCurrencyAmount;
  constructor(object, city, zipCode, address, image, date, time, price) {
    super(object, city, zipCode, address, image);
    this.date = date;
    this.time = time;
    this.price = price;
  }
  display() {
    return `${this.display()} The event will take place at ${this.time} on ${
      this.date
    }. The tickets will cost ${this.price}.`;
  }
}
