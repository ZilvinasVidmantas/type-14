'use strict';
// Funkcijos deklaravimas - tai objekto kūrimas su function prototipu
// Function prototipas, įgalina funkcijų perpanaudojimą - iškvietimą
function anyFunction(a) {
  return a * 2;
}

// Aiškesnis užrašymas, įrodantis jog funkcija yra tiesiog objektas pagal 'function' prototipą
const anyFunction2 = function (a) {
  return a * 2;
};

// Lambda išraiška yra mažesnės atminties iškviečiamas objektas, kuris 'this' raktažodį įsimena visam laikui
// Daugiau info: faile lambdaVsFunction.js
const anyFunction3 = (a) => {
  return a * 2;
}

// Jeigu lambda išraiška naudoja tik vieną parametrą, galima skliaustelių nerašyti
const anyFunction4 = a => {
  return a * 2;
}

// Jeigu lambda išraiška vykdo vieną komandą, galima nerašyti vykdymo sklaiustų  '{}'. 
// Komanda esanti už rodyklės '=>' grąžiną tos komandos rezultatą į lamdba išraiškos panaudojimo vietą
const anyFunction5 = a => a * 2;

console.dir(anyFunction(7));
console.dir(anyFunction2(7));
console.dir(anyFunction3(7));
console.dir(anyFunction4(7));
console.dir(anyFunction5(7));

// Kuomet naudoti lambda išraišką?
// 1. Kuomet reikia parašyti trumpą kintamojo kitimo veiksmą, ar komandą su kintamuoju.
// 2. Norima pririšti lambda išraiškoje esamus veiksmus prie deklaravimo aplinkos (this.js)
// 3. 1 + 2.