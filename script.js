let a = +prompt('1');
b = +prompt('2');
c = +prompt('3');
let baha;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  baha = 'не все числа ведены вверно';
} else if (a > b && a > c) {
  baha = a;
} else if (b > c) {
  baha = b;
} else {
  baha = c;
}

