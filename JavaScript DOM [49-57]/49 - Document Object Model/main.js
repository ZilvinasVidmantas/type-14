// ----------------- Elementų suradimas ----------------------
const btnPrikol = document.querySelector('.js-btn-prikol');
const jsResultPrikol = document.querySelector('.js-result-prikol');

// ----------------- Veiksmų darymas ----------------------
const padarytiNiekaNybūs = () => {
  // Konkrečių veiksmų vykdymas
  jsResultPrikol.innerHTML += 'Duok paskambint.'
}

// ----------------- Įvykių registravimas ir nukreipimas ----------------------
btnPrikol.addEventListener('click', padarytiNiekaNybūs)

/*
Užduotis:
  * Sukurkite mygtuką kurį paspaudus atsirastų naujas kvadračiukas
    Jums reikės:
      1. HTML faile sukurti mygtuką ir jį priskirtį į kintamajį main.js faile
      2. HTML faile sukurti rezultatų konteinerį ir jį priskirtį į kintamajį main.js faile
      3. Uždėti įšvykio klausiklį ant surasto mygtuko, kad jį paspaudus vykdytūsi funkcija <addSquare>
      4. Funkcijoje <addSquare> sukurkite span elementą su jūsų pasirinkta spalva ir kitomis css savybėmis:
        aukštis: 100px;
        plotis: 100px;
        display: inline-block

  Naudojamos funkcijos:
    A)
    document.querySelector(<pagalKąIeškote>) - suranda esantį elementą
    B)
    document.createElement(<kąKuriate>) - sukuria elementą
    C)
    target.style.<cssSavybėPavadinimas> = <cssSavybėsReikšmė>; - nustato <target> CSS savybę
    D)
    target.addEventListener(<įKokįĮvykįReaguoti>, <kokiąFunkcijąVykdyti>) - uždeda klausiklį
    E)
    target.appendChild(<KąPridėti>) - Prideda  elementą <KąPridėti>) į <target> elemento galą.
*/

// 1. A)
const btnAddSquare = document.querySelector('.js-btn-add-square');
// 2. A)
const squareContainer = document.querySelector('.js-square-container');

const addSquare = () => {
  // 4. B)
  const square = document.createElement('span');
  // C)
  square.style.background = '#BADA55';
  // C)
  square.style.height = '100px';
  // C)
  square.style.width = '100px';
  // C)
  square.style.display = 'inline-block';
  square.style.marginRight = '1rem';

  // E)
  squareContainer.appendChild(square);
}

// 3. D)
btnAddSquare.addEventListener('click', addSquare);