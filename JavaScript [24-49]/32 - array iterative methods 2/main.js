function sumReducer(prevSum, number) {
  return prevSum + number;
}
const numbers = [7, 8, 1, 5, 4, 6, 1, 5, 8, 9];
/*
  Jeigu neperduodate pradinės reikšmės reduce metodui, tuomet pirmasis
  masyvo elementas traktuojamas kaip pradinė reikšmė, o pradedama iteruoti nuo
  antrojo masyvo elemento.
*/
// const sum = numbers.reduce(sumReducer);
const sum = numbers.reduce(sumReducer, 0);

console.log({ sum });

// -------------------------------------------

function drinkPriceReducer(prevTotal, drink) {
  console.log({ prevTotal, drink });
  return prevTotal + drink.price;
}

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 5 },
  { name: "fanta", price: 40 },
  { name: "cola", price: 20 },
  { name: "pepsi", price: 30 },
];

const avgDrinkPrice = drinks.reduce(drinkPriceReducer, 0) / drinks.length;
console.log(avgDrinkPrice);