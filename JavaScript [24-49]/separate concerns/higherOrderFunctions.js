const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
/*
  Tai tokios funkcijos, kurioms per parametrą reikia perduoti funkciją. Dažniausiai ji vadinasi 'callback'. Tai labai dažna praktika JS kalboje
  ir funkciniame programavime. Tokią metodika labai naudinga tuomet kai norėsime formuoti, spausdinti ar filtruoti, bet dar nežinome pagal kokius
  kriterijus tai atliksime. Tokiu atveju mums praverčia specifinę kodo logiką perduoti funkcijos pavidalu, o standartinius veiksmus palikti išorinėje
  funkcijoje.
*/

/**
 * Ši funkcija skirta, formuoti naujiems masyvams, naudojant kiekvieną elementą, ir jį keičiant pagal PERDUOTĄ funkciją
 * 
 * @param {array}     arr - masyvas kurio duomenis naudosime
 * @param {function}  callback - funkcija kuriai bus perduodamas kiekvienas masyvo elementas,
 * ir jos grąžinamas rezultatas bus dedamas į naujai formuojamą masyvą
 * 
 * @return {array} suformuotas masyvas pagal parametru perduotą funkciją 'callback'
 */
const mapArray = function (arr, callback) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]));
  }
  return res;
}

/**
 * Ši funkcija pagal perduotą žmogų, grąžina string pavidalu suformuotą jo vardą su pavarde, bei šeimyninę padėtį.
 * 
 * @param {object} person - žmogų atstovaujantis objektas 
 * 
 * @return {string} suformuotas vardas, pavardė ir šeimyninė padėtis
 */
const formMarriageStatus = function (person) {
  return `${person.name} ${person.surname}: ${person.sex === 'male'
    ? person.married ? 'Vedęs' : 'Nevedęs'
    : person.married ? 'Ištekėjusi' : 'Neištekėjusi'}`;
}

const peopleMarriageStatuses = mapArray(people, formMarriageStatus);
for (let i = 0; i < peopleMarriageStatuses.length; i++) console.log(peopleMarriageStatuses[i]);