class Carpet {
  height;
  width;
  thickenss;
  material;

  constructor(height, width, thickenss, material) {
    // this - naujas objektas, sukurtas pagal Carpet šabloną
    this.height = height;
    this.width = width;
    this.thickenss = thickenss;
    this.material = material;
  }

  getArea() {
    //  this - objektas kurį naudojant buvo iškviestas metodas getArea
    return (this.height * this.width / 10000) + 'm²';
  }
}

const mamosKilimas = new Carpet(200, 150, 20, 'linas');
const sesėsKilimas = new Carpet(250, 250, 30, 'šiaudai');
const tavoSesėsKilimas = new Carpet(120, 80, 10, 'siūlai');

const kilimai = [
  mamosKilimas,
  sesėsKilimas,
  tavoSesėsKilimas,
];

kilimai.forEach(kiekvienasKilimas => console.log(kiekvienasKilimas.getArea()));