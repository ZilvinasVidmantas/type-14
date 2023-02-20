//  Statiniai metodai dažniausiai naudojami, pagalbinėms funkcijos, bendroms konstantos ir objektų kopijavimui įgalinti 
class Bankas {
  static viliboras = 0.48;
  static gautiCentrinioBankoDuomenis() {
    return 'Duomenys: ' + new Date() + ' - ' + Bankas.viliboras;
    // Logika gauti duomenims susisijusios su valiutomis
  }

  static keistiVilibora(naujasViliboras) {
    Bankas.viliboras = naujasViliboras;
    // Logika gauti duomenims susisijusios su valiutomis
  }

  static copy({ name, contracts, money }) {
    const newBank = new Bankas(name, contracts, money);
    return newBank;
  }

  constructor(name, contracts, money) {
    this.name = name;
    this.contracts = contracts ? JSON.parse(JSON.stringify(contracts)) : [];
    this.money = money ?? this.contracts.reduce((money, contract) => money + contract.money, 0);
  }

  detiIndeli(person, amount) {
    this.contracts.push({
      ...person,
      money: amount
    });
    this.money += amount;
  }
}

//  Kuriami objektai
const swed = new Bankas('Swedbank');
const seb = new Bankas('SEB');
const luminor = new Bankas('Luminor');

console.groupCollapsed('Statinio metodo panaudojimas klonavimui');
{
  const swedClone = Bankas.copy(swed);
  console.log('orginalas:', swed);
  console.log('kopija:', swedClone);
  // Standartiniai metodai, kviečiami naudojant objektus
  console.log('------- PADARYTI PAKITIMAI ORGINALUI -----------');
  swed.detiIndeli({ name: 'Kepleris', surname: 'Šrekas' }, 10000);
  console.log('orginalas:', swed);
}
console.groupEnd();

console.groupCollapsed('Statinio metodo naudojimas');
{
  // setInterval(() => {
  //   console.log(Bankas.gautiCentrinioBankoDuomenis());
  // }, 1000);
}
console.groupEnd();

console.groupCollapsed('Abstraktus pavyzdys - pagal schemą: "class vs instance.png"');
{
  class Šablonas {
    static šablonoSavybė = 50;
    static šablonoSavybė2 = [];

    static šablonoMetodas1(param1, param2) {
      // ... kodas
    }

    static šablonoMetodas2(...params) {
      // ... kodas
    }

    constructor(param1, param2, param3) {
      this.kuriamoObjektoSavybė1 = param1 + param2;
      this.kuriamoObjektoSavybė2 = param3;
      this.kuriamoObjektoSavybė3 = [];
    }

    kuriamoObjektoMetodas1(param1) {
      // ... kodas
    }

    kuriamoObjektoMetodas2() {
      // ... kodas
    }
  }

  const sukurtasObjektasPagalŠabloną = new Šablonas('Kefyras', 'Rūgpienis', 39845781454);
  console.log('Šablonas:');
  console.dir(Šablonas);
  console.log('Objektas pagamintas pagal Šabloną:');
  console.dir(sukurtasObjektasPagalŠabloną);
  console.log('Šablonas.prototype === sukurtasObjektasPagalŠabloną.__proto__:', Šablonas.prototype === sukurtasObjektasPagalŠabloną.__proto__);
}
console.groupEnd();
