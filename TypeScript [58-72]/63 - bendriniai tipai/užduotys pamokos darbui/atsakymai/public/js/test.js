"use strict";
console.group('3. Sukurkite funkciją "applyFilters", kuri priima masyvą elementų, ir masyvą filtravimo funkcijų. Panaudokite visas filtravimo funkcijas masyvo elementams filtruoti.');
const applyFilters = (arr, filterFuntions) => filterFuntions
    .reduce((prevArr, filterFn) => prevArr.filter(filterFn), arr);
const numbers = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 1.5, 1.7, 1.9, 2.6];
const words = ['dont\t', 'come', 'easy', 'to', 'me'];
const isEqual = (x) => x % 2 === 0;
const isOdd = (x) => x % 2 === 1 || x % 2 === -1;
const isPositive = (x) => x > 0;
const isNegative = (x) => x < 0;
const isWhole = (x) => x % 1 === 0;
const filteredNumbers = applyFilters(numbers, [isEqual, isPositive]);
const filteredNumbers2 = applyFilters(numbers, [isNegative, isPositive]);
const filteredNumbers3 = applyFilters(numbers, [isPositive, isWhole, isOdd]);
console.log(filteredNumbers);
console.log(filteredNumbers2);
console.log(filteredNumbers3);
const filteredWords = applyFilters(words, [
    (x) => x.length > 2,
    (x) => x.length <= 4,
]);
console.log(filteredWords);
//# sourceMappingURL=test.js.map