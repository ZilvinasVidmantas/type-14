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

// 30min
console.group('1. Sąjungos operatorius - UNIONS');
{
  // 10min
  console.groupCollapsed('1.1 Sukurkite funkciją "print" kuri priimą string, number arba boolean ir jį atspausdiną');
  {
    const print = (a: string | number | boolean) => console.log(a);

    console.log('print(\'Labas\')...');
    print('Labas');
    console.log('print(77)...');
    print(77);
    console.log('print(true)...');
    print(true);
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.2 Sukurkite funkciją "getLength" kuri priimą string arba masyvą ir grąžina elementų skaičių');
  {
    const getLength = (a: string | unknown[]) => a.length;

    console.table({
      'getLength(\'Labas\')': getLength('Labas'),
      'getLength([1, 2, 3, 4])': getLength([1, 2, 3, 4]),
    });
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.3 Sukurkite funkciją "isEmpty" kuri priimą string arba masyvą ir grąžiną true, jei parametras tuščias, priešingu atveju - false');
  {
    const isEmpty = (a: string | unknown[]) => a.length === 0;

    console.table({
      'isEmpty(\'Labas\')': isEmpty('Labas'),
      'isEmpty([1, 2, 3, 4])': isEmpty([1, 2, 3, 4]),
    });
  }
  console.groupEnd();
}
console.groupEnd();

// 30min
console.group('2. Tipų rinkiniai - TUPLES');
{
  // 15min
  console.groupCollapsed('2.1. Sukurkite funkciją "getMinMax" kuri priima skaičių masyvą ir grąžina dviejų vietų tipų rinkinį. Pirmas grąžinamo rinkinio elementas - mažiausias skaičių masyvas, antras - didžiausias');
  {
    const getMinMax = (numbers: number[]): [number, number] => {
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      const [min] = sortedNumbers;
      const max = sortedNumbers[sortedNumbers.length - 1];

      return [min, max];
    };

    console.table({
      'getMinMax[1, 7, -9, 5, 123]': getMinMax([1, 7, -9, 5, 123]),
      'getMinMax[7, 7, 4, 7, 8, 2, 7, 7]': getMinMax([7, 7, 4, 7, 8, 2, 7, 7]),
      'getMinMax[1, 2, 3, 4, 5, 6, 9, -7, -11, 2]': getMinMax([1, 2, 3, 4, 5, 6, 9, -7, -11, 2]),
    });
  }
  console.groupEnd();

  // 15min
  console.groupCollapsed('2.2 Sukurkite funkciją "calcDistance", kuri pagal 2 taškus (Coordinate2D), suskaičiuotų atstumą tarp taškų');
  {
    type Coordinate2D = [number, number];

    const calcDistance = (p1: Coordinate2D, p2: Coordinate2D) => {
      const [x1, y1] = p1;
      const [x2, y2] = p2;
      const deltaX = Math.abs(x1 - x2);
      const deltaY = Math.abs(y1 - y2);
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      return distance;
    };

    console.table({
      'calcDistance([0, 0], [3, 4])': calcDistance([0, 0], [3, 4]),
      'calcDistance([1, 1], [7, 9])': calcDistance([1, 1], [7, 9]),
      'calcDistance([-2, 3], [13, 11])': calcDistance([-2, 3], [13, 11]),
    });
  }
  console.groupEnd();
}
console.groupEnd();

// 35min
console.group('3. Prielaidos - ASSERTIONS');
{
  // 15min
  console.groupCollapsed('3.1 Parašykite kodą, kuris parsiųstų skelbimus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/posts?userId=1". Parsiųstus duomenis įrašykite į kintamajį "posts", darant parsiųstų duomenų tipo prielaidą. Prieš parsiunčiant duomenis apsirašykite "Post" tipą.');
  {
    type Post = {
      userId: number,
      id: number,
      title: string,
      body: string,
    };

    let posts: Post[];

    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => response.json())
      .then(((postData) => {
        posts = postData as Post[];
        console.log('3.1 Užduoties rezultatas - Post[]');
        console.table(posts);
      }));
    console.log('Rezultatas bus atspausdinama gale konsolės, nes siuntimas yra Promise...');
  }
  console.groupEnd();

  // 20min
  console.groupCollapsed('3.2 Parašykite kodą, kuris parsiųstų vartotojus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/users". Parsiųstus duomenis įrašykite į kintamajį "users", darant parsiųstų duomenų tipo prielaidą. Prieš siunčiant duomenis apsirašykite "User" tipą.');
  {
    type GeoLocation = {
      lat: string,
      lng: string,
    };

    type Address = {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: GeoLocation,
    };

    type Company = {
      name: string,
      catchPhrase: string,
      bs: string,
    };

    type User = {
      id: number,
      name: string,
      username: string,
      email: string,
      address: Address,
      phone: string,
      website: string,
      company: Company
    };

    let users: User[];

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(((userData) => {
        users = userData as User[];
        console.log('3.2 Užduoties rezultatas - User[]');
        console.table(users);
      }));
    console.log('Rezultatas bus atspausdinama gale konsolės, nes siuntimas yra Promise...');
  }
  console.groupEnd();
}
console.groupEnd();

// 25min
console.group('4. Konkretūs tipai - LITERAL TYPES');
{
  // 25min
  console.groupCollapsed('4.1 Sukurkite objektą saugoti produktams, Product, pagal kategorijas: "food", "clothes" ir "other". "products" objektas turi 3 savybės pagal kategorijų pavadinimus, kurių reikšmės - Product[]. Sukūrus ir tipais aprašius "products" struktūrą, sukurkite funkciją "addProduct", kuri pridės produktą pagal kategoriją į "products" objektą. Ši funkcija turi priimti 2 parametrus: 1 - produktas, 2 - kategorijos pavadinimas. Kategorijos pavadinimas turi būti konkretus string tipas, pagal galimas produktų objekto kategorijas. Produkto tipą apsirašykite laisvai.');
  {
    type Category = 'food' | 'clothes' | 'other';

    type Product = { id: string, title: string, price: number };

    type Products = {
      food: Product[],
      clothes: Product[],
      other: Product[],
    };
    /* Dinamiškas aprašymas: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html:
      type Products = {
        [Key in Category]: Product[]
      }
    */

    const products: Products = {
      food: [],
      clothes: [],
      other: [],
    };

    const addProduct = (product: Product, category: Category) => {
      products[category].push(product);
    };

    console.log("addProduct({ id: '1', title: 'Milk', price: 0.89 }, 'food');");
    addProduct({ id: '1', title: 'Milk', price: 0.89 }, 'food');
    console.log("addProduct({ id: '2', title: 'Bread', price: 1.19 }, 'food');");
    addProduct({ id: '2', title: 'Bread', price: 1.19 }, 'food');
    console.log("addProduct({ id: '3', title: 'Jeans', price: 35.99 }, 'clothes');");
    addProduct({ id: '3', title: 'Jeans', price: 35.99 }, 'clothes');
    console.log("addProduct({ id: '4', title: 'T-shirt', price: 19.99 }, 'clothes');");
    addProduct({ id: '4', title: 'T-shirt', price: 19.99 }, 'clothes');
    console.log("addProduct({ id: '5', title: 'Ring', price: 17.99 }, 'other');");
    addProduct({ id: '5', title: 'Ring', price: 17.99 }, 'other');

    console.log(products);
  }
  console.groupEnd();
}
console.groupEnd();

// 25min
console.group('5. Išvardinimai - ENUMS');
{
  // 25min
  console.groupCollapsed('5.1 Sukurkite artmetinių veiksmų konstantų išvardinimą: Operation -> Add, Subtract, Multiply, Divide. Parašykite funkciją "calc" kuri priima 2 skaičius ir operaciją "Operation". Pagal perduotą operaciją atlikite veiksmus ir grąžinkite rezultatą');
  {
    enum Operation {
      Add,
      Subbtract,
      Multiply,
      Divide,
    }

    const calc = (a: number, b: number, op: Operation) => {
      switch (op) {
        case Operation.Add: return a + b;
        case Operation.Subbtract: return a - b;
        case Operation.Multiply: return a * b;
        case Operation.Divide: return a / b;
        default: throw new Error('Error: invalid operation!');
      }
    };

    console.table({
      'calc(2, 3, Operation.Add)': calc(2, 3, Operation.Add),
      'calc(2, 3, Operation.Subbtract)': calc(2, 3, Operation.Subbtract),
      'calc(2, 3, Operation.Multiply)': calc(2, 3, Operation.Multiply),
      'calc(2, 3, Operation.Divide)': calc(2, 3, Operation.Divide),
    });
  }
  console.groupEnd();
}
console.groupEnd();
