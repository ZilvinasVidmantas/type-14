const flats = [{
  address: 'Vilnakiemio g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 16 },
  ],
  city: 'Vilnius',
  price: 120000
}, {
  address: 'Ruginių pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'svetainė', area: 18 },
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 120000
}, {
  address: 'Valatkų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
    { title: 'miegamasis2', area: 19 },
  ],
  city: 'Kaunas',
  price: 120000
}, {
  address: 'Vareikų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'svetainė', area: 18 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 90000
}, {
  address: 'Majonezo pr. 17',
  rooms: [
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 50000
}, {
  address: 'Saulės g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
  ],
  city: 'Klaipėda',
  price: 80000
}];

console.group('1. Patikrinkite, ar yra butų, su daugiau nei 5 kambariais');
{
  const hasBigFlats = flats.some(({ rooms }) => rooms.length > 5);
  console.log({ hasBigFlats });
}
console.groupEnd();

console.group('2. Patikrinkite, ar visi butai brangesni už 50 000');
{
  const allFlatsExpensive = flats.every(({ price }) => price > 50000);
  console.log({ allFlatsExpensive });
}
console.groupEnd();

console.group('3. Suraskite pirmą butą, kuris pigesnis už 55 000 ir jį atspausdinkite');
{
  const firstCheapFlat = flats.find(({ price }) => price < 55000);
  console.log({ firstCheapFlat });
}
console.groupEnd();

console.group('4. Suraskite pirmą butą, kuris pigesnis nei 90 000 ir po jo įterpkite naują butą <flatToAdd>');
{
  const flatToAdd = {
    address: 'Naujakurių g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
    ],
    city: 'Jurbarkas',
    price: 35000
  };

  const flatsCopy = [...flats];
  const indexOfModeratePriceFlat = flatsCopy.findIndex(({ price }) => price < 90000);
  flatsCopy.splice(indexOfModeratePriceFlat + 1, 0, flatToAdd);
  console.log(flatsCopy);
}
console.groupEnd();
