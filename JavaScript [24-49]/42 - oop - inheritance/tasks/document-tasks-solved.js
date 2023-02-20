//  Klasės čia
class Page {
  content;

  constructor(content) {
    this.content = content;
  }
}

class Document {
  static printPageView(data) {
    console.log(`%c${data}.`, 'padding: 20px 10px; border: 1px solid black;')
  }

  title;
  author;
  dateCreated;
  pages;
  currentPage;

  constructor(title, author, dateCreated, pagesStrings) {
    this.title = title;
    this.author = author;
    this.dateCreated = dateCreated;
    this.pages = pagesStrings.map(x => new Page(x));
    this.currentPage = 1;
  }

  nextPage() {
    const newCurrentPage = this.currentPage + 1;
    if (newCurrentPage <= this.pages.length) {
      this.currentPage = newCurrentPage;
    }
  }

  prevPage() {
    const newCurrentPage = this.currentPage - 1;
    if (newCurrentPage >= 1) {
      this.currentPage = newCurrentPage;
    }
  }

  printCover() {
    Document.printPageView(`"${this.title}" by ${this.author}, ${this.dateCreated}`);
  }

  printPage() {
    Document.printPageView(this.pages[this.currentPage - 1].content);
  }

  print() {
    this.printCover();
    for (this.currentPage = 1; this.currentPage <= this.pages.length; this.currentPage += 1) {
      this.printPage();
    }
  }
}

class Book extends Document {
  category;

  constructor(category, ...documentProps) {
    super(...documentProps);
    this.category = category;
  }

  changeCategory(newCategory) {
    this.category = newCategory;
  }
}
class NewsPaper extends Document {
  company;

  constructor(company, ...documentProps) {
    super(...documentProps);
    this.company = company;
  }

  printCompany() {
    console.log(this.company)
  }
}
class Contract extends Document {
  participants;

  constructor(participants, ...documentProps) {
    super(...documentProps);
    this.participants = participants;
  }

  addParticipant(newParticipant) {
    this.participants.push(newParticipant);
  }
}
//  Bendri kintamieji:
const document1 = new Document('Burterbrodo gyvenimas', 'Storas Tinginys', '2022-12-05', [
  'Pirmas puslapis',
  'Antras puslapis',
  'Trečias puslapis',
  'Ketvirtas puslapis',
  'Penktas puslapis',
]);

const book = new Book('Nuotykis', 'Burterbrodo gyvenimas', 'Storas Tinginys', '2022-12-05', [
  'Pirmas puslapis',
  'Antras puslapis',
  'Trečias puslapis',
  'Ketvirtas puslapis',
  'Penktas puslapis',
]);

const newsPaper = new NewsPaper('15Min', '15Min', 'Tomas Balžekas', '2002-12-05', [
  'Pirmas straipsnis',
  'Antras straipsnis',
  'Trečias straipsnis',
  'Ketvirtas straipsnis',
  'Penktas straipsnis',
]);

const contract = new Contract(
  ['Vagnoris Balandis', 'Svajūnas Barzda'],
  'Mokslų sutartis', 'Gadvilos Notarų biuras', '2002-12-06', [
  'Pirmas sutarties puslapis',
  'Antras sutarties puslapis',
  'Trečias sutarties puslapis',
  'Ketvirtas sutarties puslapis',
  'Penktas sutarties puslapis',
]);


const documents = [book, newsPaper, contract];
// Pavyzdžius pateikite čia
console.group('0. Sukurkite klasę Page, kuri turėtų savybes: content');
{
  const pages1 = [
    new Page('Pirmas puslapis'),
    new Page('Antras puslapis'),
    new Page('Trečias puslapis'),
    new Page('Ketvirtas puslapis'),
    new Page('Penktas puslapis'),
  ];
  console.log(pages1);
  console.log('Ar visi masyvo elementai yra puslapiai? ->', pages1.every(p => p instanceof Page))
}
console.groupEnd();

console.group('1. Sukurkite klasę Document, kuri turėtų savybes: title, dateCreated, author, pages, currentPage');
// Kiekvienas puslapis turi būti Page klasės objektas susijęs su klase Document kompozicijos ryšiu. Document.pages -> Array<Page> [Page, Page, Page]
// Konstruktoriaus metu sukurkite visus knygos duomenis.
{
  console.log({ document1 });
}
console.groupEnd();

console.group('2. Klasėjė Document sukurkite metodą <printCover>, kuris atspausdintų savybes <title, dateCreated, author> konsolėje');
{
  document1.printCover();
}
console.groupEnd();

console.group('3. Sukurkite metodus, <nextPage> ir <prevPage> kurie pakeistų esamą puslapį <currentPage>');
// Įvertinkite pradinius ir paskutinius puslapius. Paskutinio puslapio atveju, vykdant nextPage, nieko nedaryti. Analogiškai su prevPage ir pirmu puslapiu
{
  for (let i = 0; i < 10; i++) {
    console.log('currentPage:', document1.currentPage);
    document1.nextPage();
  }
  for (let i = 0; i < 10; i++) {
    console.log('currentPage:', document1.currentPage);
    document1.prevPage();
  }
}
console.groupEnd();

console.group('4. Sukurkite metodą <printPage> kuris atspausdintų esamą puslapį');
{
  for (let i = 0; i < 5; i++) {
    document1.printPage();
    document1.nextPage();
  }
}
console.groupEnd();

console.group('5. Sukurkite metodą <print> kuris atspausdintų visus puslapius Ir pavadinimą');
{
  document1.print();
}
console.groupEnd();

console.group('6. Sukurkite 3 klases, kurios paveldėtų klasę Document ir turėtų savo savybes, pvz.: Book, NewsPaper ir t.t.');
{
  documents.forEach(doc => doc.print());
}
console.groupEnd();

console.group('7. Kiekvienoje klasėje aprašykite po vieną metodą ir vieną papildomą savybę');
{
  console.group('"Book" savybė category ir metodas changeCategory');
  {
    console.log(book.category);
    book.changeCategory('Komedija');
    console.log(book.category);
  }
  console.groupEnd();

  console.group('"NewsPaper" savybė company ir metodas printCompany');
  {
    newsPaper.printCompany();
  }
  console.groupEnd();

  console.group('"Contract" savybė participants ir metodas addParticipant');
  {
    console.log(contract.participants);
    contract.addParticipant('Klaida Misteikienė');
    console.log(contract.participants);
  }
  console.groupEnd();
}
console.groupEnd();

// Norint gauti darbą pabaigus kursus:
// Inkapsuliuoti savybes title, dateCreated, author, pages, currentPage naudojant # private modifier

