// Функция, возвращающая случайное целое число
// из переданного диапазона включительно (от min до max + 1)

// https://learn.javascript.ru/task/random-int-min-max
const randomInteger = function (min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
};
randomInteger(0, 15);

// https://schoolsw3.com/js/js_random.php
const getRandomInteger = function (min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};
getRandomInteger(0, 50);


// Функция, возвращающая случайное число с плавающей точкой
// из переданного диапазона включительно
// https://qna.habr.com/q/999157

const getRandomFloat = function (min, max, fraction = 0) {
  const fractionDegree = 10 ** fraction;
  return ((Math.random() * (max - min) + min) * fractionDegree) / fractionDegree;
};
getRandomFloat(0, 100, 12);
