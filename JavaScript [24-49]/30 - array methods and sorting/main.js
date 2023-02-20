// objetkto konvertavimas į masyvą

const student = {
  name: 'Lopertas',
  surnamas: 'Smauglinskas',
  age: 17,
  course: 3,
  avg: 9.7,
};

const studentKeys = Object.keys(student);
const studentValues = Object.values(student);
const keyValuePairs = Object.entries(student);

console.log({
  studentKeys,
  studentValues,
  keyValuePairs,
});

console.group('Iteravimas per raktus');
{
  for (let i = 0; i < studentKeys.length; i++) {
    const element = studentKeys[i];
    console.log(element);
  }
}
console.groupEnd();
console.group('Iteravimas per reikšmės');
{
  for (let i = 0; i < studentValues.length; i++) {
    const element = studentValues[i];
    console.log(element);
  }
}
console.groupEnd();
console.group('Iteravimas per rakto-reikšmės masyvukus(poras)');
{
  for (let i = 0; i < keyValuePairs.length; i++) {
    const element = keyValuePairs[i];
    console.log(element);
  }
}
console.groupEnd();
