// В файле accumulator-2.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

// Создай переменную accumulator и собери в ней сумму всех положительных элементов массива. Для решения используй цикл while.

const numbers = [4, 5, 7, 4, 8, -8, 3, -5, -9, 1];

let accumulator = 0;

let i = 0;
while (numbers.length > i) {
  if (numbers[i] < 0) {
    accumulator += numbers[i];
  }
  i++;
}
console.log(accumulator);
