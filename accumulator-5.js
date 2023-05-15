// В файле accumulator-5.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorEven и собери в ней четные числа массива.

// Для решения используй любой из циклов на своё усмотрение.
const numbers = [4, 5, 7, 4, 8, -8, 3, -5, -9, 1];
let accumulatorEven = [];

for (let i = 0; i < numbers.length; i++) {
  const el = numbers[i];
  if (el % 2 === 0) {
    accumulatorEven.push(el);
  }
}
console.log(accumulatorEven);
