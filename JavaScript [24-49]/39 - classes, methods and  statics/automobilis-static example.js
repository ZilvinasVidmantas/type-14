class Automobilis {
  static speedUnits = 'km/h';
  static kmh_mph = 0.621371192;
  static kmh_mps = 0.277778;

  static changeSpeedUnits(newUnits) {
    switch (newUnits) {
      case 'km/h': {
        console.log('keičiami greičio vienetai į km/h');
        Automobilis.speedUnits = 'km/h';
        break;
      }
      case 'mph': {
        console.log('keičiami greičio vienetai į mph');
        Automobilis.speedUnits = 'mph';
        break;
      }
      case 'm/s': {
        console.log('keičiami greičio vienetai į m/s');
        Automobilis.speedUnits = 'm/s';
        break;
      }

      default:
        console.error('Tokių vienetų nėra.')
    }
  }

  marke;
  modelis;
  kaina;
  greitis;
  veikiaVariklis;

  constructor(marke, modelis, kaina) {
    this.marke = marke;
    this.modelis = modelis;
    this.kaina = kaina;
    this.greitis = 0;
    this.veikiaVariklis = false;
  }

  spaustPerTapkę(prieaugis) {
    if (this.veikiaVariklis) {
      switch (Automobilis.speedUnits) {
        case 'km/h': this.greitis += prieaugis; break;
        case 'mph': this.greitis += prieaugis / Automobilis.kmh_mph; break;
        case 'm/s': this.greitis += prieaugis / Automobilis.kmh_mps; break;
      }
    } else {
      console.error('Negalima didinti greičio, jei užgesintas neįjungtas variklis')
    }
  }

  mažintiGreitį(mažėjimas) {
    this.greitis = this.greitis - mažėjimas;
  }

  užkurtiVariklį() {
    this.veikiaVariklis = true;
  }

  užgesintiVariklį() {
    this.veikiaVariklis = false;
  }

  atspausdintiGreitį() {

    switch (Automobilis.speedUnits) {
      case 'km/h': {
        console.log(this.greitis + 'km/h');
        break;
      }
      case 'mph': {
        console.log(this.greitis * Automobilis.kmh_mph + 'mph');
        break
      }
      case 'm/s': {
        console.log(this.greitis * Automobilis.kmh_mps + 'mph');
        break;
      }

      default:
        console.error('Tokių vienetų nėra.')
    }
  }
}

// km/h
const cars = [
  new Automobilis('BMW', 'X5', 12000),
  new Automobilis('BMW', 'X5', 12000),
  new Automobilis('BMW', 'X5', 12000),
  new Automobilis('BMW', 'X5', 12000),
  new Automobilis('BMW', 'X5', 12000),
];
cars.forEach(c => c.užkurtiVariklį());
cars[1].spaustPerTapkę(30);
cars[2].spaustPerTapkę(50);
cars[3].spaustPerTapkę(150);
cars.forEach(c => c.atspausdintiGreitį());

// mph
Automobilis.changeSpeedUnits('mph');
cars.forEach(c => c.atspausdintiGreitį());
console.log('padidinamas greitis visų mašinų ant 10 mph');
console.log('----------------------------------------');
cars.forEach(c => c.spaustPerTapkę(10));
cars.forEach(c => c.atspausdintiGreitį());

// kmh
Automobilis.changeSpeedUnits('km/h');
cars.forEach(c => c.atspausdintiGreitį());



