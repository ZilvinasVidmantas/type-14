const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.group('Elementų pridėjimo ir šalinimo metodai');
{
  // Naujo elemento pridėjimas į galą
  numbers.push(15);
  // Kelių elementų pridėjimas į galą
  numbers.push(16, 17, 18);
  
  // Naujo elemento pridėjimas į priekį
  numbers.unshift(0);
  // Kelių elementų pridėjimas į priekį
  numbers.unshift(-3, -2, -1);

  // Elemento pašalinimas iš galo
  const removedLastElement = numbers.pop();

  // Elemento pašalinimas iš priekio
  const removedFirstElement = numbers.shift();

  console.log(numbers);
  console.log({
    removedLastElement,
    removedFirstElement,
  });
}
console.groupEnd();

console.group('Masyvo elementų kopijavimas ir iškirpimas');
{
  console.group('Array.prototype.slice - Kopijavimas')
  {
    /*
      slice - tai metodas, kuris kopijuoja tam tikrą masyvo dalį;
      Tam kad nurodyti kurią masyvo dalį kopijuojate, naudojami 2 parametrai
      1 - nuo kurio indekso kopijuoti [ĮSKAITANT]
      2 - IKI kurio indekso kopijuoti [NE-ĮSKAITANT]
    */
    console.group('Pilnas kopijavimas');
    {
      const numbersCopy = numbers.slice();
      console.log(numbersCopy);
    }
    console.groupEnd();
    console.group('Dalinis kopijavimas su vienu parametru');
    {
      const numbersCopy = numbers.slice(3);
      console.log(numbersCopy);
    }
    console.groupEnd();
    console.group('Dalinis kopijavimas su 2 parametrais');
    {
      const numbersCopy = numbers.slice(3, 7);
      const numbersCopy2 = numbers.slice(3, -2);
      const numbersCopy3 = numbers.slice(-8, -2);
      console.log(numbersCopy);
      console.log(numbersCopy2);
      console.log(numbersCopy3);
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.group('Array.prototype.splice - Iškirpimas');
  {
    /*
      splice - tai metodas, kuris iškerpa tam tikrą masyvo dalį;
      Tam kad nurodyti kurią masyvo dalį iškerpate, naudojami 3 parametrai
      1 - nuo kurio indekso iškirpti [ĮSKAITANT]
      2 - KIEK elementų iškirpti
      3, 4, 5, ... N - kuom pakeisti/papildyti išpirptą dalį
    */
    const numbersOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('pradinis masyvas', numbersOriginal);
    console.group('Šalinimas');
    {
      const numbers = numbersOriginal.slice();
      const removedElements = numbers.splice(-3);
      const removedElements2 = numbers.splice(5);
      const removedElements3 = numbers.splice(0, 2);
      console.log('pradinis masyvas, po šalinimo', numbers);
      console.log('pašalinta dalis, 3 nuo galo', removedElements);
      console.log('pašalinta dalis, 5 nuo priekio', removedElements2);
      console.log('pašalinta dalis, nuo 0, 2 elementai', removedElements3);
    }
    console.groupEnd();
    console.group('Pakeitimas');
    {
      const numbers = numbersOriginal.slice();
      const removedElements = numbers.splice(-2, 2, 11, 11);
      const removedElements2 = numbers.splice( 2, 2, 12, 12, 12, 12, 12);

      console.log('pradinis masyvas, po pakeitimo', numbers);
      console.log('pašalinta dalis, 2 nuo galo, 2 elementai', removedElements);
      console.log('pašalinta dalis, 2 nuo priekio, 2 elementai', removedElements2);
    }
    console.groupEnd();
    console.group('Perkėlimas');
    {
      const numbers = numbersOriginal.slice();
      const removedElements = numbers.splice(-3);
      // ...[8, 9, 10] → 8, 9, 10
      numbers.unshift(...removedElements);

      console.log('pradinis masyvas, po perkėlimo', numbers);
    }
    console.groupEnd();
    console.group('Papildymas');
    {
      const numbers = numbersOriginal.slice();
      numbers.splice(2, 0, 5, 5, 5);
      console.log('pradinis masyvas, po papildymo', numbers);
    }
    console.groupEnd();
    console.groupEnd();
  }
  console.groupEnd();
}

console.group('Masyvų sujungimas');
{
  const numbers1 = [7, 7, 7];
  const numbers2 = [5, 5, 5];

  const joinedNumbers2 = numbers1.concat(numbers2);
  const joinedNumbers1 = [ ...numbers1.slice(), ...numbers2.slice()];
  numbers1.splice(numbers1.length, 0, ...numbers2);
  numbers1.push(...numbers2);

  console.log('pirmasis masyvas', numbers1);
  console.log('antrasis masyvas', numbers2);
  console.log(joinedNumbers1);
  console.log(joinedNumbers2);
}
