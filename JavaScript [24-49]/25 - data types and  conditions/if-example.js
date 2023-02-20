const limonadoKaina = 1.20;
let imestiPinigai = 1.1;


// "Pateikti limonada" operacijos apdorojimas
if (imestiPinigai >= limonadoKaina) {
  console.log('Limonadas pateikiamas...');
  let graza = imestiPinigai - limonadoKaina;
  if (graza > 0) {
    console.log('Pasimkite grąžą. Geros dienos')
  } else {
    console.log('Geros dienos')
  }
} else {
  console.log('Nepakama pinigų');
  // ....
}