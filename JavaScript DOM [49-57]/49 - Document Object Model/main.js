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
    document.querySelector(<pagalKąIeškote>) - suranda esantį elementą
    document.createElement(<kąKuriate>) - sukuria elementą
    target.style.<cssSavybėPavadinimas> = <cssSavybėsReikšmė>; - nustato <target> CSS savybę
    target.addEventListener(<įKokįĮvykįReaguoti>, <kokiąFunkcijąVykdyti>) - uždeda klausiklį
    target.appendChild(<KąPridėti>) - Prideda  elementą <KąPridėti>) į <target> elemento galą.
*/