// let a = +prompt('1');
// b = +prompt('2');
// c = +prompt('3');
// let baha;

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//   baha = 'не все числа ведены вверно';
// } else if (a > b && a > c) {
//   baha = a;
// } else if (b > c) {
//   baha = b;
// } else {
//   baha = c;
// }

// for (let x = 0; x < 100; x++) {
//   alert(x);
// }

let a = +prompt('введите 1-е число');
let b = +prompt('введмите 2-е число');
let c = +prompt('введите 3-е число');

let number;

while (true) {
  // Запрашиваем у пользователя ввод
  let userInput = +prompt('Введите число:');
  // Проверяем, является ли введенное значение числом
  if (!isNaN(number)) {
    // Если это число, выходим из цикла
    break;
  } else {
  }
}

// Когда цикл завершен, выводим сообщение о правильном вводе
alert(`Вы ввели число: ${number}`);

if (a > b && a < c) {
  console.log(a);
} else if (b > a && b < c) {
  console.log(b);
} else {
  console.log(c);
}
