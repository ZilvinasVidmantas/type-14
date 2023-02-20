console.group('1. Sukurti 5 kintamuosius, kurie apibūdintu jus. Kintamuosius atspausdinkite įvardindami kintamųjų pavadinimus.');
console.log('asdasdasdsa')

console.groupEnd();


console.group('2. Parašykite salyginį sakinį, kuris pagal jūsų 5 kintamuosius (kuriuos pakeitinėsite) atspausdintų skirtingą tekstą');


console.groupEnd();


console.group('3. Parašykite switch salyginį sakinį patikrinti jūsų būseną ("atsikėlęs" | "miegantis" | "pavargęs") ir pagal tai priskirkite 6 kintamojo (planas) reikšmę');
const state = 'pavargęs';
let plan;

switch (state) {
  case 'atsikėlęs': plan = 'Eit išsimaudyt'; break;
  case 'miegantis': plan = 'Toliau ilsiuosi'; break;
  case 'pavargęs': plan = 'Pažiūrėt filmą'; break;
  default: console.error('Tokia būsena neatpažinta');
}
console.log({ state, plan });

console.groupEnd();
