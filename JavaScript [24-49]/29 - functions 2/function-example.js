function ijungtiAutomatiniKepinima() {
  setInterval(() => {
    console.log('Kepinamas oras');
  }, 2000);
}

function virtiKava(vanduo, kavosPupeliuKiekis) {
  const vandensIrKavosSantykis = vanduo / kavosPupeliuKiekis;
  console.log(vandensIrKavosSantykis);

  if (vandensIrKavosSantykis >= 8) {
    return 'Kavos gėrimas';
  } else if (vandensIrKavosSantykis > 4) {
    return 'Juoda kava';
  } else {
    return 'Esspreso';
  }
}

const puodelis1 = virtiKava(500, 50);
const puodelis2 = virtiKava(400, 50);
const puodelis3 = virtiKava(300, 50);
const puodelis4 = virtiKava(250, 50);
const puodelis5 = virtiKava(200, 50);
const puodelis6 = virtiKava(150, 50);
const puodelis7 = virtiKava(100, 50);
console.table({
  puodelis1,
  puodelis2,
  puodelis3,
  puodelis4,
  puodelis5,
  puodelis6,
  puodelis7,
});
