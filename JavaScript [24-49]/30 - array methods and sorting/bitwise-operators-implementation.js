// https://edabit.com/challenge/vvuAkYEAArrZvmp6X

// function decimalToByte(decimal) {
//   const binary = decimal.toString(2);
//   const zeroCount = 8 - binary.length;

//   return ('0').repeat(zeroCount) + binary;
// }

function bitwiseAND(dec1, dec2) {
  // const bin1 = decimalToByte(dec1);
  // const bin2 = decimalToByte(dec2);
  // let result = ''
  // for (let i = 0; i < bin1.length; i++) {
  //   result += bin1[i] === '1' && bin2[i] === '1' ? 1 : 0;
  // }
  // return parseInt(result, 2);
  return dec1 & dec2;
}

function bitwiseOR(dec1, dec2) {
  // const bin1 = decimalToByte(dec1);
  // const bin2 = decimalToByte(dec2);
  // let result = ''
  // for (let i = 0; i < bin1.length; i++) {
  //   result += bin1[i] === '1' || bin2[i] === '1' ? 1 : 0;
  // }
  // return parseInt(result, 2);
  
  return dec1 | dec2;
};

function bitwiseXOR(dec1, dec2) {
  // const bin1 = decimalToByte(dec1);
  // const bin2 = decimalToByte(dec2);
  // let result = ''
  // for (let i = 0; i < bin1.length; i++) {
  //   result += bin1[i] !== bin2[i] ? 1 : 0;
  // }
  // return parseInt(result, 2);
  return dec1 ^ dec2;
}

console.table({
  'bitwiseAND(7, 12)': bitwiseAND(7, 12),
  'bitwiseOR(7, 12)': bitwiseOR(7, 12),
  'bitwiseXOR(7, 12)': bitwiseXOR(7, 12),
});
