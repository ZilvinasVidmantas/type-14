//  Klasės čia


// Pavyzdžius pateikite čia
console.group('0. Sukurkite klasę Page, kuri turėtų savybes: content');
{

}
console.groupEnd();

console.group('1. Sukurkite klasę Document, kuri turėtų savybes: title, dateCreated, author, pages, currentPage');
// Kiekvienas puslapis turi būti Page klasės objektas susijęs su klase Document kompozicijos ryšiu. Document.pages -> Array<Page> [Page, Page, Page]
// Konstruktoriaus metu sukurkite visus knygos duomenis.
{

}
console.groupEnd();

console.group('2. Klasėjė Document sukurkite metodą <printCover>, kuris atspausdintų savybes <title, dateCreated, author> konsolėje');
{

}
console.groupEnd();

console.group('3. Sukurkite metodus, <nextPage> ir <prevPage> kurie pakeistų esamą puslapį <currentPage>');
// Įvertinkite pradinius ir paskutinius puslapius. Paskutinio puslapio atveju, vykdant nextPage, nieko nedaryti. Analogiškai su prevPage ir pirmu puslapiu
{

}
console.groupEnd();

console.group('4. Sukurkite metodą <printPage> kuris atspausdintų esamą puslapį');
{

}
console.groupEnd();

console.group('5. Sukurkite metodą <printBook> kuris atspausdintų visus puslapius Ir pavadinimą');
{
  console.group('<title> by <author>, <dateCreated>');
  {
    console.groupCollapsed('Puslapio numeris');
    {
      console.log('Puslapio turinys')
    }
    consoel.groupEnd();
  }
  console.groupEnd()

}
console.groupEnd();

console.group('6. Sukurkite 3 klases, kurios paveldėtų klasę Document ir turėtų savo savybes, pvz.: Book, NewsPaper ir t.t.');
{
  //  Sukūrus klases, pademonstruokite tėvinės klasės metodų veikimą
}
console.groupEnd();

console.group('7. Kiekvienoje klasėje aprašykite po vieną metodą ir vieną papildomą savybę');
{
  // Pademonstruokite specifinius vaikinų klasių metodus ir savybes
}
console.groupEnd();

// Norint gauti darbą pabaigus kursus:
// Inkapsuliuoti savybes title, dateCreated, author, pages, currentPage naudojant # private modifier

