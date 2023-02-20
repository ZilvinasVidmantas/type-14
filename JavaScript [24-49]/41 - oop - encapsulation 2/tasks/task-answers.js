const isObjectLiteral = (val) => Object.getPrototypeOf(val) === Object.prototype

class House {
  #address;
  #city;
  #owners;

  constructor(address, city, owners) {
    this.address = address;
    this.city = city;
    this.owners = owners;
  }

  set address(val) {
    if (typeof val !== 'string') {
      console.error('Error in House.address, val must be an string.');
      return;
    }
    if (val.length < 2) {
      console.error('Error in House.address, val must longer than 2 symbols.');
      return;
    }
    if (val.length > 32) {
      console.error('Error in House.address, val must shorter then 32 symbols');
      return;
    }

    // TODO: ateityje ištrinti, šis spausdinimas nereikalingas. Dabar naudojama tik mokymosi tikslais
    console.log(`%cnew address is accepted: ${val}`, 'color: green');
    this.#city = val;
  }

  get address() {
    return this.#address;
  }

  set city(val) {
    if (typeof val !== 'string') {
      console.error('Error in House.city, val must be an string.');
      return;
    }
    if (val.length < 2) {
      console.error('Error in House.city, val must longer than 2 symbols.');
      return;
    }
    if (val.length > 32) {
      console.error('Error in House.city, val must shorter then 32 symbols');
      return;
    }

    // TODO: ateityje ištrinti, šis spausdinimas nereikalingas. Dabar naudojama tik mokymosi tikslais
    console.log(`%cnew city is accepted: ${val}`, 'color: green');
    this.#city = val;
  }
  get city() {
    return this.#city;
  }

  set owners(newOwners) {
    if (!Array.isArray(newOwners)) {
      console.error('Error in House.setOwners. newOwners must be an Array.');
      return;
    }
    if (newOwners.length === 0) {
      console.error('Error in House.setOwners. newOwners can\'t be empty.');
      return;
    }
    if (!newOwners.every(isObjectLiteral)) {
      console.error('Error in House.setOwners. Every owner must be object literal.');
      return;
    }
    if (!newOwners.every((owner) => typeof owner.name === 'string' && owner.name.length > 1)) {
      console.error('Error in House.setOwners. Every owner must have a name, which is longer than 1 letter.');
      return;
    }

    // TODO: ateityje ištrinti, šis spausdinimas nereikalingas. Dabar naudojama tik mokymosi tikslais
    console.log(`%cnewOwners are accepted. Welcome home:\n\t${newOwners.map(x => x.name).join('\n\t')}`, 'color: green');
    this.#owners = newOwners;
  }
  get owners() {
    return this.#owners;
  }
}

const house = new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]);
const houses = [
  new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]),
  new House('Aliejų g. 121', 'Kaunas', [{ name: 'Sensas Jautimantas' }, { name: 'Rekė Jautimantė' }]),
  new House('Sustenų g. 7', 'Vilnius', [{ name: 'Groja Blanienė' }, { name: 'Fartas Blanys' }]),
  new House('Varkatkų g. 7', 'Klaipėda', [{ name: 'Faryja Mirgaitė' }]),
];

console.group('1. HouseInstance.owners savybės inkapsuliacija');
{
  console.log(house.owners);
  house.owners = 8;
  house.owners = [];
  house.owners = [7, 8];
  house.owners = [{}, {}, {}];
  house.owners = [{ name: 7 }, { name: 7 }, { name: 7 }];
  house.owners = [{ name: 'a' }, { name: 'aa' }, { name: 'lll' }];
  house.owners = [{ name: 'Ben Waps' }, { name: 'Jeronim Smith' }, { name: 'Kegl Straisen' }];
}
console.groupEnd();

console.group('2. Perrašykite HouseInstance.address savybės inkapsuliaciją');
{
  house.address = 7; 
  house.address = '7'; 
  house.address = 'Bel'; 
  console.log(house.address);
  console.log(house.address);
  console.log(house.address);
}
console.groupEnd();

console.group('3. Perrašykite HouseInstance.city savybės inkapsuliaciją');
{
  house.city = 7; 
  house.city = '7'; 
  house.city = 'Bel';
  console.log(house.city);
  console.log(house.city);
  console.log(house.city);
}
console.groupEnd();

/*

*/
