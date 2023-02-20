/** 
 * Kintamasis tai tiesiog būdas pasiekti reikšę, bet pati reikšmė turi savo tipą.
 * JavaScript kalboje, visi tipai yra skirstomi į 2 grupes
 * Primityvūs:
 *    Number: bet koks skaičius
 *    String: simbolių darinys rašomas tarp kabučių <'...'>, arba <"...">, arba <`...`>
 *    Boolean: true || false. Bulio algrebra grįstos reikšmės - tiesa, arba melas.
 *    undefined: reikšmės neaprašymas, tuštuma.
 *    null: pasakymas, kad reikšmės nėra
 * Nuorodos tipo:
 *    Object: rakto iš reikšių poros
 *      Function - ↘
 *      Array    - → → → Bet kokie kiti nuorodos tipai yra Objekto papildymas/išplėtimas
 *      Date     - ↗
 *      ir daug kitų prototipų...
*/

console.group('Primityvių kintamųjų kopijavimas');
{
  const a = 7;
  console.log('a:', a);
  let b = a;
  console.log('Padaryta a kintamojo kopija b:', b);
  b = 'Pakeista';
  console.log('Pakeista b kintamojo reikšmė...');
  console.log('a:', a);
  console.log('b:', b);
  console.log('Išvada: Pagal kopijavimo pavyzdį, matome, jog kintamieji nėra susiję.');
  console.log('Pakeitus vieną - kitas nekinta.');
}
console.log('-------------------------\n');
console.groupEnd();

console.group('Nuorodos(objekto) tipo kintamųjų kopijavimas');
{
  const a = [1, 2, 3];
  //         0  1  2
  // a[0] -> 1
  // a[1] -> 2
  // a[2] -> 3
  console.log('a:', a);
  let b = a;
  console.log('Padaryta a kintamojo kopija b:', b);
  b[0] = 'Pakeista';
  b[1] = 'Pakeista';
  b[2] = 'Pakeista';
  console.log('Pakeistos b masyvo reikšmės...');
  console.log('a:', a);
  console.log('b:', b);
  console.log('Išvada: Pagal kopijavimo pavyzdį, matome, jog kintamieji YRA susiję.');
  console.log('Pakeitus vieną - keičiasi ir kitas.');
}
console.log('-------------------------\n');
console.groupEnd();
