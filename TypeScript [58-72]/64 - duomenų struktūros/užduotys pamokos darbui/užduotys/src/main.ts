/* eslint-disable max-classes-per-file */
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

// 55 min
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
  /*
    Perskaitykite: https://runestone.academy/ns/books/published/pythonds/BasicDS/WhatisaStack.html
  */

  // ↓↓↓ klasė ↓↓↓
  class Stack<T> {
  }
  // ↑↑↑ klasė ↑↑↑

  // ↓↓↓ bendri kintamieji ↓↓↓
  // ↑↑↑ bendri kintamieji ↑↑↑

  // 5 min.
  console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
  }
  console.groupEnd();

  // 20 min
  console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
  {
  }
  console.groupEnd();

  // 20 min
  console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
  {
  }
  console.groupEnd();

  // 10 min
  console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
  }
  console.groupEnd();
}
console.groupEnd();

// 70 min
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
  /*
    Perskaitykite: https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm
  */

  // ↓↓↓ klasė ↓↓↓
  class Queue<T> {
    private privateIndex;

    [index: number]: T | undefined;

    constructor() {
      this.privateIndex = -1;
    }

    get length() {
      return this.privateIndex + 1;
    }

    enqueue(data: T) {
      this.privateIndex += 1;
      this[this.privateIndex] = data;
    }

    dequeue(): T | undefined {
      const firstElement = this[0];
      if (firstElement === undefined) return undefined;

      for (let i = 1; i <= this.privateIndex; i += 1) {
        this[i - 1] = this[i];
      }

      delete this[this.privateIndex];
      this.privateIndex -= 1;

      return firstElement;
    }
  }
  // ↑↑↑ klasė ↑↑↑

  // ↓↓↓ bendri kintamieji ↓↓↓
  let numberQueue: Queue<number>;
  let stringQueue: Queue<string>;
  // ↑↑↑ bendri kintamieji ↑↑↑

  // 5 min.
  console.groupCollapsed('2.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
    numberQueue = new Queue();
    stringQueue = new Queue();
    console.log({
      numberQueue,
      stringQueue,
    });
  }
  console.groupEnd();

  // 30 min
  console.group('2.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros galą');
  {
    numberQueue.enqueue(7);
    numberQueue.enqueue(8);
    numberQueue.enqueue(9);
    console.log(numberQueue);

    stringQueue.enqueue('7');
    stringQueue.enqueue('8');
    stringQueue.enqueue('9');
    console.log(stringQueue);
  }
  console.groupEnd();

  // 30 min
  console.group('2.3. Sukurkite metodą "dequeue", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tvarkingai persislinktų ir indeksuotūsi');
  {
    const removedNumberQueueElement1 = numberQueue.dequeue();
    console.log({
      removedNumberQueueElement1,
      numberQueue,
    });
    const removedNumberQueueElement2 = numberQueue.dequeue();
    console.log({
      removedNumberQueueElement2,
      numberQueue,
    });
    const removedNumberQueueElement3 = numberQueue.dequeue();
    console.log({
      removedNumberQueueElement3,
      numberQueue,
    });
    const removedNumberQueueElement4 = numberQueue.dequeue();
    console.log({
      removedNumberQueueElement4,
      numberQueue,
    });

    const removedStringQueueElement1 = stringQueue.dequeue();
    console.log({
      removedStringQueueElement1,
      numberQueue,
    });
    const removedStringQueueElement2 = stringQueue.dequeue();
    console.log({
      removedStringQueueElement2,
      numberQueue,
    });
    const removedStringQueueElement3 = stringQueue.dequeue();
    console.log({
      removedStringQueueElement3,
      numberQueue,
    });
    const removedStringQueueElement4 = stringQueue.dequeue();
    console.log({
      removedStringQueueElement4,
      numberQueue,
    });
  }
  console.groupEnd();

  // 5 min
  console.group('2.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
    console.log({ count: numberQueue.length });
    console.log('adding 3 elements...');
    numberQueue.enqueue(7);
    numberQueue.enqueue(8);
    numberQueue.enqueue(9);
    console.log({ count: numberQueue.length });
    console.log('removing 2 elements');
    numberQueue.dequeue();
    numberQueue.dequeue();
    console.log({ count: numberQueue.length });
    console.log('removing another 2 elements');
    numberQueue.dequeue();
    numberQueue.dequeue();
    console.log({ count: numberQueue.length });

    console.log({ count: stringQueue.length });
    console.log('adding 3 elements...');
    stringQueue.enqueue('7');
    stringQueue.enqueue('8');
    stringQueue.enqueue('9');
    console.log({ count: stringQueue.length });
    console.log('removing 2 elements');
    stringQueue.dequeue();
    stringQueue.dequeue();
    console.log({ count: stringQueue.length });
    console.log('removing another 2 elements');
    stringQueue.dequeue();
    stringQueue.dequeue();
    console.log({ count: stringQueue.length });
  }
  console.groupEnd();
}
console.groupEnd();
