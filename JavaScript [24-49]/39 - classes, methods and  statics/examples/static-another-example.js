// Statinių kintamųjų tikslas:
// * Grupavimui, pvz.: Math -> Math.PI, Math.round, Math.floor ...
// * Kurti objektų logikai reikalingus kintamuosius/konstantas
// * Įgalinti objektų metodų veikimą grįstą statiniais kintamaisiais
class Apartment {
  static currency = 'EUR';
  static count = 0;
  static EUR_USD = 1.03;

  address;
  city;

  constructor(address, city, price) {
    Apartment.count += 1;
    this.address = address;
    this.city = city;
    this.price = price;
    this.id = `Apartment_${Apartment.count}`;
  }

  getPrice() {
    return Apartment.currency === 'EUR' ? this.price : Math.round(this.price * Apartment.EUR_USD);
  }
}

const apartments = [
  new Apartment('Kėglių g. 67', 'Boulingradas', 50000),
  new Apartment('Sviesto g. 2', 'Milkija', 70000),
  new Apartment('Barbarų g. 2', 'Vikingėnai', 60000),
];

Apartment.currency = 'USD';
console.log('prices in USD:');
apartments.forEach(apartment => console.log(apartment.getPrice()));
Apartment.currency = 'EUR';
console.log('prices in EUR:');
apartments.forEach(apartment => console.log(apartment.getPrice()));
