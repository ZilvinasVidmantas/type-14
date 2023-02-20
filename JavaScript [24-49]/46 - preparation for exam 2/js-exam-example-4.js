//  svoriai pateikti gramais
const itemsData = [
  { title: 'ball', weight: 1000, categories: ['sports', 'hobbies', 'games', 'outdoors'] },
  { title: 'cards', weight: 200, categories: ['sports', 'hobbies', 'games', 'poker'] },
  { title: 'pen', weight: 100, categories: ['stationary', 'writing'] },
  { title: 'cup', weight: 400, categories: ['kitchen'] },
  { title: 'milk', weight: 2100, categories: ['food', 'lactose'] },
  { title: 'beef jerkies', weight: 1100, categories: ['food', 'meat', 'beef'] },
  { title: 'sunglasses', weight: 1100, categories: ['hobbies', 'sun protection', 'outdoors'] },
];

console.group('1. Sukurkite klasę <Item> pagal <itemsData> elementą-objektą. Aprašykite konstruktorių kuris įrašytų visus duomenis į privačias <Item> savybes');
{
}
console.groupEnd();

console.group('2. Panaudokite <itemsData>, kad sukurti <Items> objektų masyvą');
{
}
console.groupEnd();

console.group('3. Inkapsuliuokite savybę <title>, jog ji būtų `string` tipo ir parašykite jai get`erį ir set`erį. Pademonstruokite inkapsuliacijos veikimą.');
{
}
console.groupEnd();

console.group('4. Inkapsuliuokite savybę <weight>, jog ji būtų `number` ir parašykite jai get`erį ir set`erį. Pademonstruokite inkapsuliacijos veikimą.');
{
}
console.groupEnd();

console.group('5. Inkapsuliuokite savybę <categories>, jog ji būtų masyvas sudarytas iš `string`ų ir parašykite jai get`erį ir set`erį. Naudojant <categories> get`erį turi būti grąžinama privati <categories> masyvo kopija. Naudojant <categories> set`erį turi būt įrašoma masyvo kopija. Pademonstruokite inkapsuliacijos veikimą ir nuorodų nesutapimą po <categories> priskyrimo ir panaudojimo');
{
}
console.groupEnd();

console.group('6. Sukurkite get`erį <categoriesList>, kuris grąžintų visas <categories> savybes kategorijas atskirtas ", "');
{
}
console.groupEnd();

console.group('7. Atrinkite visus daiktus, kurie sunkesni nei 1000');
{
}
console.groupEnd();

console.group('8. Atrinkite visus daiktus, kurie turi kategoriją "hobbies"');
{
}
console.groupEnd();

console.group('9. Išrikiuokite daiktus nepažeidžiant naudojamo <Item> masyvo duomenų, pagal kategorijų skaičių. Nuo daugiausiai kategorijų turinčio daikto iki mažiausiai kategorijų turinčio daikto');
{
}
console.groupEnd();

console.group('10. Suformuokite naują masyvą iš <Item> masyvo duomenų, pagal formatą komentaruose.');
/*
Result object
{
  name - pavadinimas
  weight - svoris kilogramais, suapvalintas iki dviejų skaičių po kalbelio
  categories - kableliu atskirtos kategorijos
}

pvz1:
{
  name: 'ball'
  weight - '1.00kg'
  categories - 'sports, hobbies, games, outdoors'
}

pvz2:
{
  name: 'beef jerkies'
  weight - '1.10kg'
  categories - 'food, meat, beef'
}
*/
{
}
console.groupEnd();
