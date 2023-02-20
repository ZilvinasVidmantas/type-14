// Masyvas tai duomenų kolekcija panašaus tipo reikšmėms laikyti.
// Masyvo elementai yra numeruojami nuo 0, pvz.:
let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
// indeksai:    0       1         2        3       4        5       6    
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
// indeksai:    0       1     2      3     4    5     6     7  
// ---- ---- ---- MASYVO REIKŠMIŲ NAUDOJIMAS
// Masyvo reikšmės yra pasiekiamas naudojant atitinkamą indeksą:
console.log(numbers[3]); // 78
console.log(nouns[2]); // hammer
console.log(helpers[0]); // in
// Masyvo reikšmes galime nustatyti tokiu būdu:
nouns[2] = 'saw'; // reikšmė 'hammer' pasikeitė į 'saw'
numbers[3] += 6; // Prie esamos reikšmės indeksu 3 pridedama dar 6. 78 + 6 = 84;

// !!! Rašant SUDĖTINGUS algoritmus, masyvo indeksai gali būti skaičiuojami !!!
// Pvz.:
// arr.length - masyve esančių elementų skaičius 
//  Jeigu masyve yra 6 elementai, o elementai yra numeruojami nuo 0, 
// tuomet paskutinio elemento indeksas visada bus vienu mažesnis nei masyvo elementų skaičius. Iš to seka, kad:
numbers[numbers.length - 2]; // Prieš paskutinis masyvo elementas:
numbers[Math.floor((numbers.length) / 2)] // Vidurinis masyvo elementas elementas
let i = 3,
  j = 4;
numbers[i % 2 + j++]; // Sudėtinė indekso skaičiavimo logika.
