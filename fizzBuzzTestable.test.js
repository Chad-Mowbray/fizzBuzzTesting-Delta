const x = require('./fizzBuzzTestable')

let arrayOfNums = x.arrayOfNums
let transformed = x.transformed
let fizzBuzzArray = x.fizzBuzzArray
let fizzBuzzArrayToString = x.fizzBuzzArrayToString


test('arrayOfNums returns [1] given 1', () => {
  expect(arrayOfNums(1)).toStrictEqual([1]);
});

test('transformed returns fizz given 3', () => {
  expect(transformed(3)).toBe('fizz');
});

test('fizzBuzzArray returns correct array', () => {
  expect(fizzBuzzArray([1,2,3])).toStrictEqual(["1", "2", "fizz"]);
});

test('fizzBuzzArrayToString returns correct string', () => {
  expect(fizzBuzzArrayToString(["1", "2", "fizz"])).toBe('1 2 fizz');
  expect(fizzBuzzArrayToString(["1", "2", "fizz"])).toBe('1 2 fizz');
  expect(fizzBuzzArrayToString(["1", "2", "fizz"])).toBe('1 2 fizz');
  expect(fizzBuzzArrayToString(["1", "2", "fizz"])).toBe('1 2 s');
});