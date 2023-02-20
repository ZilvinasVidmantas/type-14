// Code repetition
// Funkcija, kuri nieko negrąžina - spausdina
function printHeader(text) {
  console.log(`%c${text}`, 'color: #00006; font-size: 22px; font-weight: 700');
}

printHeader('Antraštė 3000');

//  Funkcija kuri grąžiona reikšmę
// P.S.: funkcijoms kurios turi grąžinti reikšmę turite sukurti kintamajį ir jį atspausdinti
// arba kitu būdu gražiai atspausdinti rezultatus
function multiply(a, b) {
  return a * b;
}

const res1 = multiply(7, 10);
const res2 = multiply(2, 10);

console.table({
  res1, res2,
});

console.table({
  'multiply(7, 10)': multiply(7, 10),
  'multiply(2, 10)': multiply(2, 10),
})
