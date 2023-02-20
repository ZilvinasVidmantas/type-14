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

// 15 min
console.group('1. Tipų indeksai');
{
  type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string,
      },
    };
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
  };

  const users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
      }
    },
  ]

  // 10 min
  console.groupCollapsed('1.1. Sukurkite tipą Address naudodami tipą User. Parašykite funkciją "getUserAddress", kuri priima vartotoją (User) ir grąžina vartotojo adresą (Address)');
  {
    type Address = User['address'];

    const getUserAddress = (user: User): Address => user.address;

    const usersAddresses: Address[] = users.map(getUserAddress);

    console.table(usersAddresses);
  }
  console.groupEnd();

  // 5 min
  console.groupCollapsed('1.2. Sukurkite tipą Company naudodami tipą User. Parašykite funkciją "getUserCompany", kuri priima vartotoją (User) ir grąžina vartotojo kompaniją (Company)');
  {
    type Company = User['company'];

    const getUserCompany = (user: User): Company => user.company;

    const usersCompanies: Company[] = users.map(getUserCompany);

    console.table(usersCompanies);
  }
  console.groupEnd();
}
console.groupEnd();

// 25 min
console.group('2. Pagalbiniai tipai');
{
  type BMWCar = {
    brand: 'BMW',
    model: 'X1' | 'X2' | 'X3' | 'X4' | 'X5',
    make: number,
    color?: string,
  };

  const cars: BMWCar[] = [
    { brand: 'BMW', model: 'X1', make: 2000, color: 'black', },
    { brand: 'BMW', model: 'X2', make: 2001, },
    { brand: 'BMW', model: 'X3', make: 2002, color: 'red', },
    { brand: 'BMW', model: 'X4', make: 2003, },
  ]

  // 10 min
  console.groupCollapsed('2.1. Sukurkite funkciją "selectWithColor" kurti atrenka visas mašinas turinčias aprašytą spalvą, ir aprašykite joms tipą BMWCarFull su visomis privalomomis savybėmis');
  {
    type FullyDescribedBMWCar = Required<BMWCar>;

    const selectWithColor = (car: BMWCar) => Boolean(car.color)

    const fullyDescribedCars = cars.filter(selectWithColor) as FullyDescribedBMWCar[];

    console.table(fullyDescribedCars);
  }
  console.groupEnd();


  // 15 min
  console.groupCollapsed('2.2. Sukurkite funkciją "refactorBmwCar" kurti perkuria mašiną.  Pašalina mašinos savybė brand, o model savybę pakeičia taip, kad joje būtų markė ir modelis atskirta tarpu. Visos kitos savybės paliekamos tokios pat');
  {
    type RefactoredBMWCar = Omit<BMWCar, 'brand' | 'model'> & {
      model: `${BMWCar['brand']} ${BMWCar['model']}`
    };

    const refactorBmwCar = ({ brand, model, ...rest }: BMWCar): RefactoredBMWCar => ({
      ...rest,
      model: `${brand} ${model}`
    })

    const refactoredCars = cars.map(refactorBmwCar) as RefactoredBMWCar[];

    console.table(refactoredCars);
  }
  console.groupEnd();
}
console.groupEnd();

// 30 min
console.group('3. Tipų apjungimas ir “&” sankirtos operatorius');
{
  type User = {
    email: string,
    password: string,
    name?: string,
    surname?: string,
    image?: string,
    cartItems: string[],
  };

  // 30 min
  console.groupCollapsed('3.1. Sukurkite tipą UserRegistration naudodami tipą User. UserRegistration tipas turi turėti papildomas ir privalomas savybes emailConfirmation ir passwordConfirmation, bei pašalintą savybę cartItems. Sukūrus tipą UserRegistration sukurkite funkciją "registerUser" kuri priimtų UserRegistration tipo parametrą ir grąžintų User tipo objektą, jeigu sutampa email su emailConfirmation ir password su passwordConfirmation. Jeigu pakartotinės savybės nesutampa turi būti grąžinama "null" reikšmė');
  /* Hints:
    * Omit<Type, Keys>
    * X extends Y || & 
    * Type index'es
  */
  {
    type UserRegistration = Omit<User, 'cartItems'> & {
      emailConfirmation: User['email'],
      passwordConfirmation: User['password'],
    };

    const registerUser = ({
      email,
      emailConfirmation,
      password,
      passwordConfirmation,
      ...userProps
    }: UserRegistration): User | null => {
      if (email === emailConfirmation && password === passwordConfirmation) {
        return {
          ...userProps,
          email,
          password,
          cartItems: [],
        }
      }

      return null;
    }

    const userRegistrationValid: UserRegistration = {
      surname: 'Dykuminis',
      email: 'dziungliu.sniurs@maurum.lt',
      emailConfirmation: 'dziungliu.sniurs@maurum.lt',
      password: 'Tarzanas123',
      passwordConfirmation: 'Tarzanas123',
    };

    const userRegistrationInvalid: UserRegistration = {
      name: 'Skrebutis',
      email: 'skrebutis.varsketis@sviestuotas.lt',
      emailConfirmation: 'skrebutis.varsketis@sviestuotas.lt',
      password: 'Su200gGrietines',
      passwordConfirmation: 'Su250gGrietines',
    };

    console.log('Registration atempt:', JSON.stringify(userRegistrationValid, null, 4));
    const registrationResult1 = registerUser(userRegistrationValid);
    console.log('Result:', registrationResult1);

    console.log('Registration atempt:', JSON.stringify(userRegistrationInvalid, null, 4));
    const registrationResult2 = registerUser(userRegistrationInvalid);
    console.log('Result:', registrationResult2);
  }
  console.groupEnd();
}
console.groupEnd();

// 50 min
console.group('4. Tipų susaistymas');
{
  type Accommodation = {
    address: string,
    squares: number,
    type: 'Flat' | 'House' | 'Cottage',
  }

  // 50 min
  console.groupCollapsed('4.1. Turite tipą Accomodation, jo visos savybės yra pasiekiamos ir keičiamos tiesiogiai. Naudodami saistymo metodologiją sukurkite tipą EncapsulatedAccomodation. Panaudokite kiekvieną Accomodation tipo savybę, kad performuoti ją į setterio ir getterrio funkcijų poras. Sukūrę tipą, aprašykite funkciją "encapsulateAccomodation", kuri priimtų Accomodation tipo parametrą ir grąžintų EncapsulatedAccomodation objektą su veikiančiais setteriais ir getteriais.');
  /* Hints:
     * TS: mapped types
     * TS: keyof operator
     * TS: Key Remapping via "as"
     * TS: index Types
     * TS: intersection operator &
     * JS: lexical scope
     * OOP: encapsulation 
   */
  {
    type AccommodationGetters = {
      [Key in keyof Accommodation as `get${Capitalize<Key>}`]: () => Accommodation[Key]
    }

    type AccommodationSetters = {
      [Key in keyof Accommodation as `set${Capitalize<Key>}`]: (val: Accommodation[Key]) => void
    }

    type EncapsulatedAccomodation = AccommodationGetters & AccommodationSetters;

    const encapsulateAccomodation = (accomodation: Accommodation): EncapsulatedAccomodation => {
      const privateAccomodation: Accommodation = { ...accomodation };

      return {
        getAddress: () => privateAccomodation.address,
        getSquares: () => privateAccomodation.squares,
        getType: () => privateAccomodation.type,
        setAddress: (val: Accommodation['address']) => {
          // Patikrinimai - validacijos
          privateAccomodation.address = val;
        },
        setSquares: (val: Accommodation['squares']) => {
          // Patikrinimai - validacijos
          privateAccomodation.squares = val;
        },
        setType: (val: Accommodation['type']) => {
          // Patikrinimai - validacijos
          privateAccomodation.type = val;
        },
      }
    }

    const accomodation1: Accommodation = {
      address: 'Bernužėlių g. 17, Rokelių kaimas, Pasvalio raj.',
      squares: 224,
      type: 'House',
    };
    console.log('Encapsulating accomodation1:', JSON.stringify(accomodation1, null, 4));
    const encapsulatedAccomodation1 = encapsulateAccomodation(accomodation1);
    console.log('Changing properties using setters...')
    encapsulatedAccomodation1.setAddress('Bernužėlių g. 17, Rokelių kaimas, Biržų raj.')
    encapsulatedAccomodation1.setSquares(180);
    console.log('using getters after changes', {
      'getAddress()': encapsulatedAccomodation1.getAddress(),
      'getSquares()': encapsulatedAccomodation1.getSquares(),
      'getType()': encapsulatedAccomodation1.getType(),
    });
    console.log('-----');


    const accomodation2: Accommodation = {
      address: 'Vilniaus g. 26a, Kaunas',
      squares: 64,
      type: 'Flat',
    };

    console.log('Encapsulating accomodation2:', JSON.stringify(accomodation2, null, 4));
    const encapsulatedAccomodation2 = encapsulateAccomodation(accomodation2);
    console.log('Changing properties using setters...')
    encapsulatedAccomodation2.setSquares(110);
    encapsulatedAccomodation2.setType('House');
    console.log('using getters after changes', {
      'getAddress()': encapsulatedAccomodation2.getAddress(),
      'getSquares()': encapsulatedAccomodation2.getSquares(),
      'getType()': encapsulatedAccomodation2.getType(),
    });

  }
  console.groupEnd();

}
console.groupEnd();
