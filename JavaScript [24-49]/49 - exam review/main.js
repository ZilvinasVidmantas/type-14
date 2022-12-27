const apartmentsData = [
  {
    street: "Savanorių g. 10",
    city: "vilnius",
    type: "flat",
    price: 90000,
    rooms: [24, 31],
  },
  {
    street: "Verkių g. 10",
    city: "Vilnius",
    type: "house",
    price: 150000,
    rooms: [24, 16, 14, 12],
  },
  {
    street: "Jaunimo g. 17",
    city: "Vilnius",
    type: "cottage",
    price: 120000,
    rooms: [10, 10, 16, 14, 12],
  },
  {
    street: "Veidrodžių g. 75",
    city: "Vilnius",
    type: "house",
    price: 220000,
    rooms: [24, 16, 16, 14, 12],
  },
  {
    street: "Gedimino pr. 18",
    city: "Vilnius",
    type: "flat",
    price: 370000,
    rooms: [24, 32, 31],
  },
  {
    street: "Jonavos g. 17",
    city: "Kaunas",
    type: "house",
    price: 90000,
    rooms: [18, 20, 12, 60],
  },
  {
    street: "Savanorių pr. 21a",
    city: "kaunas",
    type: "flat",
    price: 60000,
    rooms: [24, 30],
  },
  {
    street: "Partizanų g. 55",
    city: "Kaunas",
    type: "flat",
    price: 75000,
    rooms: [20, 30, 16],
  },
  {
    street: "Krantų pr. 18",
    city: "Klaipėda",
    type: "house",
    price: 77000,
    rooms: [17, 12, 10, 5],
  },
];

class Apartment {
  #type;
  street;
  city;
  price;
  rooms;
  constructor({street, city, type, price, rooms}){
    this.street = street;
    this.city = city;
    this.type = type;
    this.price = price;
    this.rooms = rooms;
  }

  set type(val){
    const loverCaseVal = val.toLowerCase();
    if(loverCaseVal === 'flat' || loverCaseVal === 'house' || loverCaseVal === 'cottage'){
      this.#type = val;
    }
    else console.error(`Apartment type: ${val} incorrect, apartment can only be flat, house or cottage`);
    
  }

  get type(){
    return this.#type;
  }

  get adress(){
    return `${this.street}, ${this.city[0].toUpperCase() + this.city.slice(1)}`
  }

  get squares(){
    return this.rooms.reduce((squaresAcc, room) => squaresAcc + room, 0);
  }
}

let apartment;
let apartments;

console.group(
  "1. Sukurkite klasę <Apartment> pagal visas <apartmentsData> objektų savybes"
);
{
  apartment = new Apartment({
    street: "Krantų pr. 18",
    city: "Klaipėda",
    type: "house",
    price: 77000,
    rooms: [17, 12, 10, 5],
  });
  console.log(apartment);
}
console.groupEnd();

console.group(
  "2. Naudodami <apartmentsData> kintamojo duomenis, sukurkite masyvą sudarytą iš Apartment klasės objektų."
);
{
  apartments = apartmentsData.map((apartment) => new Apartment(apartment));
  console.table(apartments);
}
console.groupEnd();

console.group(
  "3. Klasėje Apartment sukurkite get'erį <address> kuris grąžintų pilną būsto adresą, formatu: '<GATVĖ>, <MIESTAS>.'"
);
// '<GATVĖ>, <MIESTAS>.'
// 'Savanorių g. 10, Vilnius.'
// 'Gedimino pr. 18, Vilnius.'
{
  apartments.forEach((apartment) => console.log(apartment.adress));
}
console.groupEnd();

console.group(
  "4. Klasėje Apartment sukurkite get'erį <squares> kuris grąžina visą būsto kvadratūrą."
);
{
  apartments.forEach((apartment) => console.log(apartment.squares));
}
console.groupEnd();

console.group(
  "5. Inkapsuliuokite savybę <type>, jog ji galėtų būti tik viena iš 3 reikšmių: 'flat', 'house' arba 'cottage'. Pavaizduokite nekorektiškus inkapsuliuotos savybės <type> priskyrimus. Inkapsuliacija turi veikti ir kuriant naujus <Apartment> objektus."
);
{
  const apartmentEncTest = new Apartment({
    street: "Krantų pr. 18",
    city: "Klaipėda",
    type: "houses",
    price: 77000,
    rooms: [17, 12, 10, 5],
  });
  console.log(apartmentEncTest);

}
console.groupEnd();

console.group("6. Atrinkite visus būstus iš Vilniaus, kurių tipas yra 'flat'");
{
  const apartmensFlats = apartments.filter((apartment) => apartment.city.toLowerCase() === 'vilnius' && apartment.type === 'flat');
  console.table(apartmensFlats);
}
console.groupEnd();

console.group("7. Suskaičiuokite visų būstų iš Kauno bendrą kainą");
{
  const apartmentsFromKaunas = apartments.filter((apartment) => apartment.city.toLowerCase() === 'kaunas')
  console.log(apartmentsFromKaunas)
  const apartmentsFromKaunasPriceSum = apartmentsFromKaunas.reduce((priceSum, {price}) => priceSum + price, 0);
  console.log(apartmentsFromKaunasPriceSum);
}
console.groupEnd();

console.group(
  "8. Išrikiuokite visus būstus pagal kainą, nuo brangiausio iki pigiausio, nepažeidžiant pradinių duomenų."
);
{
  const apartmentsByPrice = [...apartments].sort((apartment1, apartment2) => apartment2.price - apartment1.price);
  console.table(apartmentsByPrice);
}
console.groupEnd();

console.group(
  "9. Sugrupuokite visus būstus pagal miestą. Grupių pavadinimai - miestai iš mažųjų raidžių."
);
/*
  kaunas: (3) [Apartment, Apartment, Apartment]
  klaipėda: [Apartment]
  vilnius: (5) [Apartment, Apartment, Apartment, Apartment, Apartment]
*/
{
  const apartmensGroups = apartments.reduce((prevGroups, apartment) =>{
    const groupKey = apartment.city.toLowerCase();
    const currentGroup = prevGroups[groupKey] ?? [];
    return { ...prevGroups, [groupKey]: [...currentGroup, apartment]};
  }, {});
  console.log(apartmensGroups);
}
console.groupEnd();

console.group(
  "10. Suformuokite naują masyvą iš <Apartment> masyvo duomenų, pagal formatą komentaruose."
);
/*
Result object:
{
  address,     String
  price,       Number
  roomCount,   Number
  squares,     Number
  type,        'flat' | 'house' | 'cottage'       
}

pvz1:
{
  address: "Savanorių g. 10, vilnius.",
  price: 90000,
  roomCount: 2,
  squares: 55,
  type: "flat",
}

pvz2:
{
  address: "Krantų pr. 18, Klaipėda.",
  price: 77000,
  roomCount: 4,
  squares: 44,
  type: "house",
}
*/
{
  const reformatedApartments = apartments.map((apartment) => ({
    adress: apartment.adress,
    price: apartment.price,
    roomCount: apartment.rooms.length,
    squares: apartment.squares,
    type: apartment.type
  }));
  console.table(reformatedApartments);
}
console.groupEnd();
