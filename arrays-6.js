// В файле arrays-6.js создай массив с десятью элементами числового типа.

// Ниже напиши цикл for, который выводит в консоль всё четные числа.

// Еще ниже напиши цикл while, который выводит в консоль все нечетные числа.

let numbers = [4, 5, 7, 24, 8, -8, 3, -5, -9, 1];

for (let i = 0; i < numbers.length; i++) {
  const el = numbers[i];
  if (el % 2 === 0) {
    console.log(el);
  }
}

let i = 0;
while (numbers.length > i) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
  i++;
}
