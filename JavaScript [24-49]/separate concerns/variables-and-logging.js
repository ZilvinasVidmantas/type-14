// Kintamasis
//  Paprastai - kintamasis tai saugykla, į kurią galite įdėti reikšmę
//  Pilnai -  kintantamasis tai yra programavimo veikimo (runtime) atmintyje išsaugota nuorodą į operatyviosios atminties(RAM) vietą.

// Kintamojo deklaravimas - tai pasakymas vykdomam JS procesui/programai, jog bus naudojama atminties vieta, pasiekiama kintamojo pavadinimu

// Kada naudoti 'const' o kada 'let'?
// Atsakymas:
//  Visada naudoti 'const', išskyrus tuos atvejus, kuomet PLANUOJATE keisti kintamojo reikšmę.

// Tik deklarvimas
let a; // vieno kintamojo deklaravimas
console.log('a:', a); // spausdinimas

// Deklaravimas IR priskyrimas
let b; // deklaravimas
b = 9; // priskyrimas
console.log('b:', b); // spausdinimas

// Deklaravimas su priskyrimu
let c = 11; // deklaravimas ir priskyrimas
console.log('c:', c); // spausdinimas

// Kintamojo perrašymas(override) - antrą kartą deklaruoti NEREIKIA IR NEGALIMA
a = 22; // reikšmės priskyrimas jau esančiam kintamui
console.log('a:', a); // spausdinimas

// KONTSTANTOS
const d = 7; // deklaravimas, priskyrimas ir reikšmės pakeitimo uždraudimas
// d = 5465; KLAIDA
console.log('d:', d);

// SPAUSINIMAS
const students = [
  { name: 'Serbentautas', surname: 'Bordiūras', age: 21, course: 3 },
  { name: 'Stalčius', surname: 'Komoda', age: 20, course: 2 },
  { name: 'Lempa', surname: 'Elektrytė', age: 21, course: 3 },
  { name: 'Palangė', surname: 'Katytė', age: 19, course: 1 }
];
console.groupCollapsed('console.log');
{
  // console.log - atspausdinama vartotojui suprantamu būdu, galima atspausdinti daug dalykų, juos atskyrus kableliu
  console.log(students);
  console.log(a, b, c, d);
  console.log('a:', a, 'b:', b, 'c:', c, 'd:', d);
  console.log({ a, b, c, d });
}
console.groupEnd();

console.groupCollapsed('console.dir');
{
  // console.dir - atspausdina kintamajį informatyviu būdu
  const pageBody = document.body;
  console.log(pageBody);
  console.dir(pageBody);
}
console.groupEnd();

console.groupCollapsed('console.table');
{
  // console.table - atspausdina masyvo elementus eilutėmis
  console.log(7);
  console.table(7);
  console.log(students);
  console.table(students);
}
console.groupEnd();

console.group('console.group');
{
  // console.group() + console.groupEnd(); - Patogus būdas atspausdinti grupę susijusių dalykų
  console.log('grupės turinys');
  console.log('grupės turinys');
  console.log('grupės turinys');
  console.log('grupės turinys');
  console.log('grupės turinys');
}
console.groupEnd();

console.groupCollapsed('console.groupCollapsed');
{
  // console.groupCollapsed() + console.groupEnd(); - Patogus būdas atspausdinti grupę susijusių dalykų
  console.log('grupės turinys');
  console.log('grupės turinys');
  console.log('grupės turinys');
  console.log('grupės turinys');
  console.log('grupės turinys');
}
console.groupEnd();
