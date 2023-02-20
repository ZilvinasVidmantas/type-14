//  class - šablonas kurti objektams
//  this - objektas, kurį naudojant (per kurį) buvo kviestas metodas
//  objektas.metodas()  -> <metodas> iškvietimo metu this nuoroda rodys į <objektas> kintamuoju pasiekiamą atmintį
class Rectangle {
  // Gera praktika dėl aiškumo: parašyti kokias savybes turės Rectangle prototipo(klasės) objektai
  height;
  width;

  // metodas kviečiamas kuriant naują objektą, pagal klasės šabloną
  // 3.
  constructor(height, width) {
    /* 
      this = {
        __prototype__: {
          area,
          constructor,
          perimeter,
        }
      }
    */
    this.height = height;
    this.width = width;
    /* 
      this = {
        height: 5,
        width: 10,
        __prototype__: {
          area,
          constructor,
          perimeter,
        }
      }
    */
  }

  // 1. this.prototype.area = function(){...}
  area() {
    console.log('Rectangle.area:', this);
    return this.height * this.width;
  }

  // 2. this.prototype.perimeter = function(){...}
  perimeter() {
    return this.height * 2 + this.width * 2;
  }
}

const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(10, 10);

console.log(rect1);





