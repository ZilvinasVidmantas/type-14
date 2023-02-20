class Atmosphere {
  static carbonDioxide = 10 ** 9;
  static oxigen = 10 ** 9;
}

class Tree {
  mass;
  height;

  constructor(mass, height) {
    this.height = height;
    this.mass = mass;
  }

  absorbMinerals() {
    console.log('Absorbing minerals...');
  }

  applyFotosynthesis() {
    Atmosphere.carbonDioxide -= this.mass / 100 * 0.75;
    Atmosphere.oxigen += this.mass / 100 * 0.8754;
  }
}

class Oak extends Tree {
  treeHouse;
  //                        [105, 95]
  constructor(treeHouse, ...parentParams) {
    // super(...[105, 95]) ->> super(105, 95)
    super(...parentParams);
    // Papildomi veiksmai Oak
    this.treeHouse = treeHouse;
  }
}

class Birch extends Tree {
  constructor(mass, height) {
    super(mass, height);
    // Papildomi veiksmai Birch
  }
}

const forest = [
  new Oak('fainas namelis', 100, 100),
  new Oak('fainas namelis', 110, 100),
  new Oak('fainas namelis', 90, 100),
  new Oak('fainas namelis', 105, 100),
  new Oak('fainas namelis', 95, 100),
  new Birch(100, 100),
  new Birch(110, 100),
  new Birch(90, 100),
  new Birch(105, 100),
  new Birch(95, 100),
];

setInterval(() => {
  forest.forEach(tree => tree.applyFotosynthesis());
  console.log({
    'Atmosphere.carbonDioxide': Atmosphere.carbonDioxide,
    'Atmosphere.oxigen': Atmosphere.oxigen,
  })
}, 200);
