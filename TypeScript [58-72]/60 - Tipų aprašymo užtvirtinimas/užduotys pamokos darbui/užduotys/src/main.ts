/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 10 min
console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  const printUppercase = (str: string): void => console.log(str.toUpperCase());

  const samples = ['labas', 'vaKAras', 'abugnaris', 'abc'];

  samples.forEach((sample) => {
    console.log(`printUppercase("${sample}"):`);
    printUppercase(sample);
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  const countSybols = (str1: string, str2: string): number => str1.length + str2.length;

  const samples = [
    ['pirmas', 'antras'],
    ['zodis', 'aaa'],
    ['', ''],
    ['lll', 'za'],
  ];

  // samples.forEach(([arg1, arg2]) => {
  //   console.log(`countSybols("${arg1}", "${arg2}") => ${countSybols(arg1, arg2)}`);
  // });

  const resultObject = samples.reduce((prevObj, [arg1, arg2]) => ({
    ...prevObj,
    [`countSybols("${arg1}", "${arg2}")`]: countSybols(arg1, arg2),
  }), {});

  console.table(resultObject);
}
console.groupEnd();

// 10 min
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  const hasLetter = (word: string, letter: string): boolean => word.includes(letter);

  const samples = [
    ['labas', 'a'],
    ['zodis', 'p'],
    ['', '5'],
    ['12346', '2'],
  ];

  samples.forEach(([arg1, arg2]) => {
    console.log(`hasLetter("${arg1}", "${arg2}") => ${hasLetter(arg1, arg2)}`);
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const hasEvenLetterCount = (word: string): boolean => word.length % 2 === 0;

  ['labass', 'vaKAras', 'abugnaris', 'abcd'].forEach((sample) => {
    console.log(`hasEvenLetterCount("${sample}"): ${hasEvenLetterCount(sample)}`);
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const REGEX_VOWEL = /[aeiouyąęėįšųū]/ig;

  const countVowels = (word: string): number => {
    const findings = word.match(REGEX_VOWEL);

    return findings === null ? 0 : findings.length;
  };

  ['labass', 'vaKAras', 'abugnaris', 'abcd'].forEach((arg) => {
    console.log(`countVowels("${arg}"): ${countVowels(arg)}`);
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
  const getLetterCount = (word: string, letter: string): number => {
    const letterRegex = new RegExp(letter, 'ig');

    const findings = word.match(letterRegex);

    return findings === null ? 0 : findings.length;
  };

  [
    ['labas', 'a'],
    ['zodis', 'p'],
    ['', '5'],
    ['12346', '2'],
  ].forEach(([word, letter]) => {
    console.log(`getLetterCount("${word}", "${letter}"): ${getLetterCount(word, letter)}`);
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
  const findAndRemoveFirstLetter = (
    word: string,
    symbol: string,
  ): string => word.replace(new RegExp(symbol, 'i'), '');

  [
    ['lAbas', 'a'],
    ['Pampersai', 'p'],
    ['', '5'],
    ['5552555255', '2'],
  ].forEach(([word, letter]) => {
    const functionCallString = `findAndRemoveFirstLetter("${word}", "${letter}")`;
    const computedValue = findAndRemoveFirstLetter(word, letter);
    console.log(`${functionCallString} => ${computedValue}`);
  });
}
console.groupEnd();

// 20 min
//  8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
  const findAndRemoveAllLetters = (
    word: string,
    letters: string[],
  ): string => word.replaceAll(new RegExp(`[${letters.join('')}]`, 'gi'), '');

  const samples: Array<[string, string[]]> = [
    ['lAbas', ['a', 'b']],
    ['mama', ['a', 'm']],
    ['', ['k', 'z']],
    ['5552555255', ['2', '3']],
  ];

  samples.forEach(([word, letters]) => {
    const lettersArrRepresentation = `[${letters.map((x) => `"${x}"`).join(', ')}]`;
    const functionCallString = `findAndRemoveAllLetters("${word}", ${lettersArrRepresentation})`;
    const computedValue = findAndRemoveAllLetters(word, letters);
    console.log(`${functionCallString} => "${computedValue}"`);
  });
}
console.groupEnd();

// 60 min
// 9. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
  const capitalizeFirstLetter = (word: string): string => word[0].toUpperCase() + word.slice(1);

  const fixParagraph = (paragraph: string): string => paragraph
    .split(/([.?!])/)
    .slice(0, -1)
    .map((sentence) => sentence.trim())
    .map(capitalizeFirstLetter)
    .join('')
    .replaceAll(/\s+/g, ' ')
    .replaceAll(' ,', ',')
    .replaceAll(/([.?!,])([^\s])/g, '$1 $2');

  const paragraph = '    labas , as jonas     . Tave      vadina Kęstu         ,taip? Taip ir žinojau  !';
  const fixedParagraph = fixParagraph(paragraph);
  console.log(paragraph);
  console.log(fixedParagraph);
}
console.groupEnd();
