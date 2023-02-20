const filmsData = [{
  title: 'The Matrix',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
  year: 1999,
}, {
  title: 'The Matrix Reloaded',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 7, 8, 9, 10, 10],
  year: 2003,
}, {
  title: 'The Matrix Revolutions',
  roles: [
    { title: 'Neo', actor: { name: 'keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 8, 9, 10, 10, 10, 7, 8],
  year: 2003,
}, {
  title: 'The Shawshank Redemption',
  roles: [
    { title: 'Andy Dufresne', actor: { name: 'Tim', surname: 'Robbins' } },
    { title: "Ellis Boyd 'Red' Redding", actor: { name: 'Morgan', surname: 'Freeman' } },
  ],
  ratings: [10, 10, 10, 10, 10, 8, 10, 10],
  year: 1994,
}, {
  title: 'The Godfather',
  roles: [
    { title: 'Don Vito Corleone', actor: { name: 'Marlon', surname: 'Brando' } },
    { title: 'Michael Corleone', actor: { name: 'Al', surname: 'Pacino' } },
    { title: 'Tom Hagen', actor: { name: 'Robert', surname: 'Duvall' } },
  ],
  ratings: [10, 10, 9, 10, 8, 10, 10],
  year: 1972,
}, {
  title: 'The Dark Knight',
  roles: [
    { title: 'Joker', actor: { name: 'Heath', surname: 'Ledger' } },
    { title: 'Bruce Wayne', actor: { name: 'Christian', surname: 'Bale' } },
  ],
  ratings: [10, 9, 9, 9, 10, 8, 10, 10],
  year: 2008,
}];

console.group('1. Sukurkite klasę <Film>, kuri turėtų savybes kaip kiekvienas <filmsData> objektas');
{
}
console.groupEnd();

console.group('2. Panaudokite <filmsData> duomenis kad sukurti <Film> klasės objektų masyvą');
{
}
console.groupEnd();

console.group('3. Sukurkite get`erį <ratingCount>, kuris grąžintų filmo įvertinimų skaičių.');
{
}
console.groupEnd();

console.group('4. Sukurkite get`erį <rating>, kuris grąžintų filmo įvertinimą, suapvalintą iki 1 skaičiaus po kablelio');
{
}
console.groupEnd();

console.group('5. Išrikiuokite filmus pagal reitingą, nuo mažiausio iki didžiausio, nepakeičiant orginalių duomenų');
{
}
console.groupEnd();

console.group('6. Atvaizduokite [5.] punktu išrikiuotų filmų atvaizdavimą lentele(console.table). Lentelė turi turėti 3 stulpelius: "title", "rating" ir  "ratingCount"');
{
}
console.groupEnd();

console.group('7. Suskaičiuokite kiek yra filmų senesnių nei 2000 metai');
{
}
console.groupEnd();

console.group('8. Atrinkite visus filmus kurie pavadinime turi žodį "Matrix"');
{
}
console.groupEnd();

console.group('9. Atrinkite filmus kuriuose vaidino "Keanu Reeves". Atrinkimą atlikite ignoruojant raidžių dydžių nesutapimą');
{
}
console.groupEnd();

console.group('10. Suformuokite naują masyvą iš <Film> masyvo duomenų, pagal formatą komentaruose.');
/*
Result object
{
  name - pavadinimas
  cast - string'ų masyvas formatu: `<rolė>: <actor.name> <actor.surname>`
  rating - įvertinimas
  ratingCount - įvertinimų kiekis
  year - metai
}

pvz1:
{
  name: "The Matrix",
  cast: (3) ['Neo: Keanu reeves', 'Morpheus: Laurence Fishburne', 'Trinity: Carrie-Anne Moss'],
  rating: 9.1,
  ratingCount: 9,
  year: 1999,
}

pvz2:
{
  name: "The Dark Knight",
  cast: (2) ['Joker: Heath Ledger', 'Bruce Wayne: Christian Bale'],
  rating: 9.4,
  ratingCount: 8,
  year: 2008,
}
*/
{
}
console.groupEnd();
