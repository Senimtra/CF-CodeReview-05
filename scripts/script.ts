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
  }
  display() {
    return `${this.object} is located in ${this.address}, ${this.zipCode} ${this.city} <img src="${this.image}`;
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
    return `${this.display()} Their phone number is ${
      this.phone
    } and you can find examples of their delicious ${
      this.cuisine
    } on their website: ${this.web}`;
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
