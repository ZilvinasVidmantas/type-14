console.group('Rikiavimas');
{
  /*
    Array.prototype.sort - tai masyvo metodas, kuris išrikiuoja elementus.
    Standartiškai šis metodas, rikiuoja reikšmes, nuo mažiausios iki didžiausios, pakeitęs jas <STRING> reikšmėmis
    Kitokio tipo elementams reikia, parduoti palyginimo funkcijos nuorodą.
    Ši palyginimo funkcija turi priimti 2 parametrus, ir grąžinti vieną skaitinę reikšmę, kuri turės tokią prasmę:
      teigiama reikšmė - pirmojo parametro prioritetas yra didesnis
      neigiama reikšmė - pirmojo parametro prioritetas yra mažesnis
      0 - parametrų prioritetai yra lygūs
    Array.prototype.sort išrikiuoja reikšmes, to masyvo, kuriam taikome šį metodą. Todėl jį taikant, elementų tvarka pasikeičia.
    Norint, kad taip neįvyktų, reikėtų rikiuoti masyvo kopiją.
  */
  console.group('Primityvių reikšmių rikiavimas');
  {
    function byNumbericValueASC(a, b) {
      return a - b;
    }

    function byNumbericValueDESC(a, b) {
      return b - a;
    }
    const lettersCodeReplacmentsLT = [
      { letter: 'Ą', code: 65.1 },
      { letter: 'ą', code: 97.1 },
      { letter: 'Ę', code: 69.1 },
      { letter: 'ę', code: 101.1 },
      { letter: 'Ė', code: 69.2 },
      { letter: 'ė', code: 101.2 },
      { letter: 'Į', code: 73.1 },
      { letter: 'į', code: 105.1 },
      { letter: 'Š', code: 83.1 },
      { letter: 'š', code: 115.1 },
      { letter: 'Ų', code: 85.1 },
      { letter: 'ų', code: 117.1 },
      { letter: 'Ū', code: 85.2 },
      { letter: 'ū', code: 117.2 },
      { letter: 'Ž', code: 90.1 },
      { letter: 'ž', code: 122.1 }
    ];

    function byLTOrderASC(a, b) {
      for (let i = 0; i < a.length; i++) {
        const letterA = a[i];
        const letterB = b[i];
        if (letterA === letterB) continue;
        let codeA;
        let codeB
        for (let j = 0; j < lettersCodeReplacmentsLT.length; j++) {
          const letterLT = lettersCodeReplacmentsLT[j].letter;
          if (letterA === letterLT) codeA = lettersCodeReplacmentsLT[j].code;
          if (letterB === letterLT) codeB = lettersCodeReplacmentsLT[j].code;
        }
        const charCodeA = codeA === undefined ? letterA.charCodeAt(0) : codeA;
        const charCodeB = codeB === undefined ? letterB.charCodeAt(0) : codeB;
        return charCodeA - charCodeB;
      }
      return 0;
    }
    
    function byLTOrderDESC(a, b) {
      return -1 * byLTOrderASC(a, b);
    }

    const names = ['Jonas', 'Ąžuolas', 'Marija', 'Šarūnė'];
    const namesASC = names.slice();
    const namesDESC = names.slice();
    namesASC.sort(byLTOrderASC);
    namesDESC.sort(byLTOrderDESC);
    namesDESC.reverse();

    const numbers = [1, 5, -9, 8, -6, 7, 8, -6, -1];
    const numbersASC = numbers.slice();
    const numbersDESC = numbers.slice();
    numbersASC.sort(byNumbericValueASC);
    numbersDESC.sort(byNumbericValueDESC);

    console.log({
      numbers,
      numbersASC,
      numbersDESC,
      names,
      namesASC,
      namesDESC,
    });
  }
}
console.groupEnd();
