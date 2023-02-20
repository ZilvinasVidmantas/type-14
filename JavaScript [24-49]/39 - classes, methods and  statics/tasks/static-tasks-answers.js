// Klasę ir bendrus kintamuosius aprašykite čia:
class Item {
  static count = 0;
  static EUR_USD = 1.05;
  static currency = 'EUR';

  title;
  price;
  category;

  constructor(title, price, category) {
    Item.count += 1;
    this.id = 'Item_' + Item.count;
    this.title = title;
    this.price = price;
    this.category = category;
  }

  getFormattedPrice() {
    switch (Item.currency) {
      case 'EUR': return this.price + '€';
      case 'USD': return (this.price * Item.EUR_USD).toFixed(2) + '$';
    }
  }

  printItem() {
    console.log(`${this.title}: \n\tKaina: ${this.getFormattedPrice()}\n\tKategorija: ${this.category}`);
  }
}

const item1 = new Item('Kamuolys', 90, 'Pramogos');
const item2 = new Item('Šortai', 7, 'Rūbai');
const item3 = new Item('Lakierkos', 110, 'Avalynė');

const items = [item1, item2, item3];

// Užduočių atlikimo pavyzdžius pateikite konsolės grupėse
console.group('1. Sukurkite klasę Item, kuri turėtų pavadinimą, kainą ir kategoriją. Kainos duomenis pateikite eurais.');
{
  console.log(item1);
}
console.groupEnd();

console.group('2. Naudodami statinę savybę kuriamiem Item objektams, kurkite unikalius identifikatorius - savybes <id>');
{
  console.table(items);
}
console.groupEnd();

console.group('3. Sukurkite statinę savybę - <EUR_USD>, kuriame būtų EUR/USD santykio konstanta');
{
  console.log(Item.EUR_USD);
}
console.groupEnd();

console.group('4. Sukurkite statinę savybę - <currency>, kuriame būti nustatyta prekių valiuta');
{
  console.log(Item.currency);
}
console.groupEnd();

console.group('5. Sukurkite metodą <printItem>, kuri atspausdintų prekę su nustatyta valiuta <currency>. Pademonstruokite skirtingą printItem veikimą, pakeitus klasės Item valiutą.');
{
  items.forEach(item => item.printItem());
  Item.currency = 'USD';
  items.forEach(item => item.printItem());
  Item.currency = 'EUR';
  items.forEach(item => item.printItem());
}
console.groupEnd();
