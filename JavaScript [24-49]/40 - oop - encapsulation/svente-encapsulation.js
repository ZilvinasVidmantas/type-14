/*
  Inkapsuliacija - tai objekto (arba klasės) savybių (arba metodų) prieinamumo valdymas;
  public - savybės ar metodai yra pasiekiami, ir gali būti keičiami bei naudojami iš bet kur
  private (#) - savybės ar metodai yra pasiekiami ir gali būti keičiami bei naudojami tik klasės metoduose, bei get'eriuose ir set'eriuose.

  Get'eteris (getter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei gauti. 
    // Get'erio metu yra pasirūpinama, jog nebūtų atiduota tiesioginė reikšmės nuoroda.

  Set'eteris (setter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei nustatyti. 
    Set'erio funkcijos metu yra atliekami naujos reikšmės patikrinimai
*/
class Šventė {
  // # - draudžia naudoti kintamuosius už klasės ribų
  // # - privataus nario nustatymas
  #pavadinimas;
  #data;
  #aprašymas

  constructor(pavadinimas, data, aprašymas) {
    this.nustatytiPavadinimą(pavadinimas);
    this.nustatytiDatą(data);
    this.nustatytiAprašymą(aprašymas);
  }

  // getTitle
  gautiPavadinimą() {
    return this.#pavadinimas;
  }

  // setTitle
  nustatytiPavadinimą(naujasPavadinimas) {
    if (typeof naujasPavadinimas !== 'string') throw new Error('Šventės pavadinimas privalo būti simbolių darinys');
    if (naujasPavadinimas.length < 4) throw new Error(`Per trumpas šventės pavadinimas:\n\t"${naujasPavadinimas}"`);
    if (naujasPavadinimas.length > 32) throw new Error(`Per ilgas šventės pavadinimas:\n\t"${naujasPavadinimas}"`);

    this.#pavadinimas = naujasPavadinimas;
  }

  // getDate
  gautiDatą() {
    // TODO: pasirūpinti nuoroda;
    return this.#data
  }

  // setDate
  nustatytiDatą(naujaData) {
    if (!(naujaData instanceof Date)) throw new Error('Šventės data privalo būtų "Date" prototipo objektas');

    this.#data = naujaData;
  }

  // getDescription
  gautiAprašymą() {
    return this.#aprašymas;
  }

  // setDescription
  nustatytiAprašymą(naujasAprašymas) {
    if (typeof naujasAprašymas !== 'string') throw new Error('Šventės aprašymas privalo būti simbolių darinys');
    if (naujasAprašymas.length < 10) throw new Error(`Per trumpas šventės aprašymas:\n\t"${naujasAprašymas}"`);
    if (naujasAprašymas.length > 200) throw new Error(`Per ilgas šventės aprašymas:\n\t"${naujasAprašymas}"`);

    this.#aprašymas = naujasAprašymas;
  }

  likoDienų() {
    const dabar = new Date();
    const likoMiliSekundžių = this.#data - dabar;
    const dienos = likoMiliSekundžių / 1000 / 60 / 60 / 24;
    const suapvalintosDienos = dienos > 0 ? Math.floor(dienos) : Math.ceil(dienos);
    console.log(`iki ${this.#pavadinimas} liko ${suapvalintosDienos} dienų`);
  }
}

// ------------------------------------- Bendri kintamieji------------------------------------------
const šiandien = new Šventė('Šiandien', new Date(2022, 11, 13, 18), 'Džiaugtis reikia kiekviena diena');
const kūčios = new Šventė('Kūčios', new Date('2022-12-24'), 'Susirenka trys karaliai');

const manoMėgstamiausiosŠventės = [
  šiandien,
  kūčios,
  new Šventė('Kalėdos', new Date(2022, 11, 25), 'Jėzaus gimimas'),
  new Šventė('Kalėdos II', new Date(2022, 11, 26), 'Jėzaus gimimą švenčiame 2 dienas, nes čia ne šiam Mantelio gimcė'),
];
// ----------------------------------------- Užduotys-----------------------------------------------
console.group('0. Inkapsuliuokite Šventė.pavadinimas reikšmę, jog ji simbolių darinys nuo 4 iki 32 ismbolių');
{
  šiandien.nustatytiPavadinimą('Eirimės vardadienis');
  manoMėgstamiausiosŠventės.forEach(šventė => console.log(šventė.gautiPavadinimą()));
}
console.groupEnd();

console.group('1. Inkapsuliuokite Šventė.data reikšmę.');
{
  console.log(šiandien.gautiDatą());
  šiandien.nustatytiDatą(new Date(2022, 11, 15));
  console.log(šiandien.gautiDatą());
  manoMėgstamiausiosŠventės.forEach(x => x.likoDienų())
}
console.groupEnd();

console.group('2. Sukurkite savybę aprašymas ir ją inkapsuliuokite');
{
  console.log(kūčios.gautiAprašymą());
  kūčios.nustatytiAprašymą('Kristaus gimimo laukimas.');
  console.log(kūčios.gautiAprašymą());
}
console.groupEnd();