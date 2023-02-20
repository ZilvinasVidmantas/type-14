const numbers = [6, 1, -5, 7, -9];
//              0  1    2  3   4  

const positiveNumbers = [];
const negativeNumbers = [];

let o = 0;
let m = 0;
let n = 0;

while (o < numbers.length) {
  if (numbers[o] > 0) {
    positiveNumbers[m] = numbers[o];
    m = m + 1;
  } else if (numbers[o] < 0) {
    negativeNumbers[n] = numbers[o];
    n = n + 1;
  }
  o = o + 1; // 0 -> 1 | 1 -> 2 | 2 -> 3 | 3 -> 4 | 4 -> 5
}

/*
                                              ALGORITMO VYKIMO SCHEMA
                                                    ---------  
  iteracija | o -> o | numbers[o] | m -> m | positiveNumbers[m] = numbers[o] | n -> n | negativeNumbers[n] = numbers[o]
  ----------|--------|---------------------------------------------------------------------------------------
  1         | 0 -> 1 | 6          | 0 -> 1 | positiveNumbers[0] = 6          | 0       | ---
  2         | 1 -> 2 | 1          | 1 -> 2 | positiveNumbers[1] = 1          | 0       | ---
  3         | 2 -> 3 | -5         | 2      | ---                             | 0 -> 1  | negativeNumbers[0] = -5
  4         | 3 -> 4 | 7          | 2 -> 3 | positiveNumbers[2] = 7          | 1       | ---
  5         | 4 -> 5 | -9         | 3      | ---                             | 1 -> 2  | negativeNumbers[1] = -9
  ------BAIGTA

  Kintamieji gale PO algoritmo 5vykdymo:
    positiveNumbers -> [6, 1, 7]
                        0  1 

    negativeNumbers -> [-5, -9]
                0   1

    o -> 5     
    m -> 3           
    n -> 2
*/