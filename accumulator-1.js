// В файле accumulator-1.js создай массив с десятью элементами числового типа.

// Создай переменную accumulator и собери в ней сумму всех элементов массива.
// Для решения используй цикл for.

const num = [4, 5, 7, 4, 8, 14, 3, 24, 27, 1];
let accumulator = 0;

for (let i = 0; i < num.length; i++) {
  const el = num[i];
  console.log((accumulator += el));
}
