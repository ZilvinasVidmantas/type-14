// polimorfizmas - daugiakūniškumas
// polimorfizmas - iš pirmos pažiūros tų pačių komandų vykdymas, atliekantis skirtingas funkcijas/metodus.

class Rectangle {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 2.1 - figure.string
  get string() {
    return `Rectangle ${this.width}x${this.height}`;
  }

  // 2.2 - figure.area
  get area() {
    return (this.width * this.height).toFixed(1);
  }

  // 2.3 - figure.perimeter
  get perimeter() {
    return (2 * (this.width + this.height)).toFixed(1);
  }
}

class Circle {
  radius;

  constructor(radius) {
    this.radius = radius;
  }

  // 2.1 - figure.string
  get string() {
    return `Circle r-${this.radius}`;
  }

  // 2.2 - figure.area
  get area() {
    return (Math.PI * this.radius ** 2).toFixed(1);
  }

  // 2.3 - figure.perimeter
  get perimeter() {
    return (2 * Math.PI * this.radius).toFixed(1);
  }
}

const rectangles = [
  new Rectangle(10, 10),
  new Rectangle(20, 20),
  new Rectangle(10, 15),
];

const circles = [
  new Circle(10),
  new Circle(20),
  new Circle(15),
];

// Tos pačios paskirties objektų (su tos pačios paskirties metodais/getteriais) saugojimas vienoje struktūroje
const figures = [
  ...rectangles,
  ...circles,
];

// polimorfizmas - iš pirmos pažiūros tų pačių komandų vykdymas, atliekantis skirtingas funkcijas/metodus/getterius.
//                  -------------------[1.]-------------------     -----------------[2]----------------
console.log('%cPlotai:', 'font-size: 24px');
//                                              [1.1]            [1.2]
figures.forEach((figure) => console.log(`${figure.string}: ${figure.area}`));
console.log('%cPerimetrai:', 'font-size: 24px');
//                                              [1.1]                 [1.3]
figures.forEach((figure) => console.log(`${figure.string}: ${figure.perimeter}`));
