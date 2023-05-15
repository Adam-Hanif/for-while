// В файле accumulator-6.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorOdd и собери в ней нечетные числа массива.

// Для решения используй любой из циклов на своё усмотрение.

const numbers = [4, 5, 7, 4, 8, -8, 3, -5, -9, 1];
let accumulatorOdd = [];

for (let i = 0; i < numbers.length; i++) {
  const el = numbers[i];
  if (el % 2 !== 0) {
    accumulatorOdd.push(el);
  }
}
console.log(accumulatorOdd);
