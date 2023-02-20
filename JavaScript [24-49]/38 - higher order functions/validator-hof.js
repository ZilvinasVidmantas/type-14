const createLengthValidator = (min, max) => {
  return (value) => {
    return value.length >= min && value.length <= max;
  };
}

// const validatePasswordLength = (value) => {
//   value.length >= 6 && value.length <= 32;
// }

// const validateEmailLength = (value) => {
//   value.length >= 8 && value.length <= 32;
// }

// const validatePostLength = (value) => {
//   value.length >= 20 && value.length <= 400;
// }

// const validateSMSLength = (value) => {
//   value.length >= 0 && value.length <= 350;
// }

const validatePasswordLength = createLengthValidator(6, 32);
const validateEmailLength = createLengthValidator(8, 32);
const validatePostLength = createLengthValidator(20, 400);
const validateSMSLength = createLengthValidator(0, 350);

console.table({
  "validatePasswordLength('labas66')": validatePasswordLength('labas66'),
  "validateEmailLength('labas66')": validateEmailLength('labas66'),
});