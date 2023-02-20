const tvsData = [{
  brand: 'Samsung',
  model: 'OLED',
  price: 800,
  size: 55,
  features: {
    wifi: true,
    youtube: false,
    netflix: true,
    chromeCast: true,
  }
}, {
  brand: 'samsung',
  model: 'QLED',
  price: 1200,
  size: 45,
  features: {
    wifi: false,
    youtube: true,
    netflix: true,
    chromeCast: false,
  }
}, {
  brand: 'Samsung',
  model: 'Neo QLED',
  price: 2400,
  size: 55,
  features: {
    wifi: false,
    youtube: false,
    netflix: false,
    chromeCast: true,
  }
}, {
  brand: 'Amazon',
  model: 'Fire TV',
  price: 1500,
  size: 55,
  features: {
    wifi: false,
    youtube: true,
    netflix: true,
    chromeCast: true,
  }
}, {
  brand: 'Amazon',
  model: 'Fire TV',
  price: 1800,
  size: 65,
  features: {
    wifi: true,
    youtube: true,
    netflix: true,
    chromeCast: true,
  }
}, {
  brand: 'TCL',
  model: '4-SERIES',
  price: 350,
  size: 55,
  features: {
    wifi: true,
    youtube: false,
    netflix: false,
    chromeCast: true,
  }
}, {
  brand: 'TCL',
  model: '5-SERIES',
  price: 600,
  size: 50,
  features: {
    wifi: false,
    youtube: false,
    netflix: true,
    chromeCast: false,
  }
}, {
  brand: 'TCL',
  model: '6-SERIES',
  price: 1200,
  size: 65,
  features: {
    wifi: false,
    youtube: false,
    netflix: true,
    chromeCast: true,
  }
}];

console.group('1. Sukurkite klasę <TV>, kuri turėtų savybes pagal <tvsData> duomenis objektų ir jas priskirkite');
{
}
console.groupEnd();

console.group('2. Panaudokite duomenis <tvsData>, kad sukurti TV klasės objektus.');
{
}
console.groupEnd();

console.group('3. Sukurkite get\'erį <title> kuris grąžintų televizoriaus markę, modelį ir dydį. Formatas komentaruose.');
/*
  <brand> <model> - <size>

  pvz: 
  Samsung OLED - 55
*/
{
}
console.groupEnd();

console.group('4. Sukurkite get\'erį <sizeInCM> kuris grąžintų televizoriaus dydį centimetrais, suapvalintą iki vienetų');
{
}
console.groupEnd();

console.group('5. Sukurkite get\'erį <featuresList> kuris atspausdintų visas televizoriaus galimybes(features) atskirtas ", ". Jeigu <features> objekto savybė yra false, ji neturi būti spausdinama.');
{
}
console.groupEnd();

console.group('6. Atrinkite visus televizorius, kurie turi "chromeCast" galimybę');
{
}
console.groupEnd();

console.group('7. Suskaičiuokite 55 colių televizorių vidutinę kainą');
{
}
console.groupEnd();

console.group('8. Išrikiuokite televizorius pagal kainą, nepažeisdami pradinių duomenų');
{
}
console.groupEnd();

console.group('9. Sugrupuokite televizorius pagal markę.');
{
  /*
  {
    amazon: [TV, TV],
    samsung: [TV, TV, TV],
    tcl: [TV, TV, TV],
  }
  */
}
console.groupEnd();

console.group('10. Suformuokite objektų masyvą pagal formatą pateiktą komentaruose, naudojant TV objektų masyvą');
{
  /*
  Result object
  {
    name,
    size,
    features,
  }

  pvz1:
  {
    name: "Samsung OLED",
    size: "140cm",
    features: "wifi, netflix, chromeCast",
  }

  pvz2:
  {
    name: "TCL 5-SERIES",
    size: "127cm",
    features: "netflix",
  }
  */
}
console.groupEnd();