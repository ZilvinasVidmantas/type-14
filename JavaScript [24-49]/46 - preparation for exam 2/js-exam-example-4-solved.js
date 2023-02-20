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

class Item {
  #title;
  #weight;
  #categories;

  constructor({ title, weight, categories }) {
    this.title = title;
    this.weight = weight;
    this.categories = categories;
  }

  set title(val) {
    if (typeof val !== 'string') {
      console.error('Item prop "title" must be "string"');
      return;
    }
    this.#title = val;
  }
  get title() {
    return this.#title;
  }

  set weight(val) {
    if (typeof val !== 'number') {
      console.error('Item prop "weight" must be "number"');
      return;
    }
    this.#weight = val;
  }
  get weight() {
    return this.#weight;
  }

  set categories(val) {
    if (!Array.isArray(val)) {
      console.error('Item prop "categories" must be prototype of Array');
      return;
    }
    if (val.some((x) => typeof x !== 'string')) {
      console.error('Item prop "categories" must be array of strings');
      return;
    }
    this.#categories = [...val];
  }
  get categories() {
    return [...this.#categories];
  }

  get categoriesList() {
    return this.#categories.join(', ');
  }
}

let item;
let items;

console.group('1. Sukurkite klasę <Item> pagal <itemsData> elementą-objektą. Aprašykite konstruktorių kuris įrašytų visus duomenis į privačias <Item> savybes');
{
  item = new Item({ title: 'ball', weight: 1000, categories: ['sports', 'hobies', 'games', 'outdoors'] });
  console.dir(Item);
  console.dir(item);
}
console.groupEnd();

console.group('2. Panaudokite <itemsData>, kad sukurti <Items> objektų masyvą');
{
  items = itemsData.map((itemData) => new Item(itemData));
  console.table(items);
}
console.groupEnd();

console.group('3. Inkapsuliuokite savybę <title>, jog ji būtų `string` tipo ir parašykite jai get`erį ir set`erį. Pademonstruokite inkapsuliacijos veikimą.');
{
  item.title = 7;
}
console.groupEnd();

console.group('4. Inkapsuliuokite savybę <weight>, jog ji būtų `number` ir parašykite jai get`erį ir set`erį. Pademonstruokite inkapsuliacijos veikimą.');
{
  item.weight = 'invalid value';
}
console.groupEnd();

console.group('5. Inkapsuliuokite savybę <categories>, jog ji būtų masyvas sudarytas iš `string`ų ir parašykite jai get`erį ir set`erį. Naudojant <categories> get`erį turi būti grąžinama privati <categories> masyvo kopija. Naudojant <categories> set`erį turi būt įrašoma masyvo kopija. Pademonstruokite inkapsuliacijos veikimą ir nuorodų nesutapimą po <categories> priskyrimo ir panaudojimo');
{
  item.categories = 'invalid value';
  item.categories = [1, 2, 3];

  const newCategories = ['cat1', 'cat2'];
  item.categories = newCategories;
  console.table({ 'item.categories': item.categories, newCategories });
  console.log('item.categories has same reference as newCategories:', newCategories === item.categories);

  const itemCategories = item.categories;
  console.table({ 'item.categories': item.categories, itemCategories });
  console.log('item.categories has same reference as itemCategories:', itemCategories === item.categories);
}
console.groupEnd();

console.group('6. Sukurkite get`erį <categoriesList>, kuris grąžintų visas <categories> savybes kategorijas atskirtas ", "');
{
  items.forEach(({ categoriesList }) => console.log(categoriesList));
}
console.groupEnd();

console.group('7. Atrinkite visus daiktus, kurie sunkesni nei 1000');
{
  const heavyItems = items.filter(({ weight }) => weight > 1000);
  console.table(heavyItems);
}
console.groupEnd();

console.group('8. Atrinkite visus daiktus, kurie turi kategoriją "hobbies"');
{
  const itemsForHobbies = items.filter(({ categories }) => categories.includes('hobbies'));
  console.table(itemsForHobbies);
}
console.groupEnd();

console.group('9. Išrikiuokite daiktus nepažeidžiant naudojamo <Item> masyvo duomenų, pagal kategorijų skaičių. Nuo daugiausiai kategorijų turinčio daikto iki mažiausiai kategorijų turinčio daikto');
{

  const itemsSortedByCategoryCountDESC = [...items].sort(
    (i1, i2) => i2.categories.length - i1.categories.length
  );
  console.log(`%cIšrikiuotas daiktų masyvas`, 'font-size: 16px');
  console.table(itemsSortedByCategoryCountDESC);
  console.log(`%cNepakitusi naudojamo masyvo daiktų tvarka`, 'font-size: 16px');
  console.table(items);
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
  const itemsFormatted = items.map(({ title, weight, categoriesList }) => ({
    name: title,
    weight: `${(weight / 1000).toFixed(2)}kg`,
    categoriesList,
  }));
  console.table(itemsFormatted);
}
console.groupEnd();
