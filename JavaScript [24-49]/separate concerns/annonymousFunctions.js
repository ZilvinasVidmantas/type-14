/*
Anoniminės funkcijos, tai funkcijos kurios neturi pavadinimo. Jo dažniausiai naudojamos kuomet kitos funkcijos savo argumentuose priima funkcijas.
Anonimines funkcijas naudojame tuomet, kuomet anoniminėje funkcijoje esantis kodo blokas yra arba trumpas, arba nebus perpanaudojamas.
Jeigu anoniminės funkcijos kodas programoje yra perpanaudojamas, tuomet funkciją reikėtų aprašyti atskirai, ir nenaudoti anoniminės funkcijos.
*/

// Funkcija, kuri priima kitą funkciją pirmu argumentu.
function execute(callback, times = 1) {
  while (times >= 1) callback(times--);
}

//  Ne anonimiškai aprašome funkciją kuri bus perpanaudojama
function spausdintiPasisveikinima(arg1) {
  console.log('Labs ryts:', arg1);
}

execute(spausdintiPasisveikinima);
console.log('');

// Perduoda funkcija anonimiškai. 
// Apart šio kvietinio, anoniminės funkcijos kodo blokas, nebus pasiekiamas jokioje aplinkoje, jokiais raktažodžiais.
execute(function (arg1) {
  console.log('As anonime funkcija ir man buvo prasiustas parametras:', arg1)
}, 2);
console.log('');

// Perduodama lambda išraiška anonimiškai. 
// Apart šio kvietinio, anoniminės lambda išraikos kodo blokas, nebus pasiekiamas jokioje aplinkoje, jokiais raktažodžiais.
execute(arg1 => console.log('Lambda išraiška, ir jos argumentas:', arg1), 3);



