// Функция, возвращающая случайное целое число
// из переданного диапазона включительно (от min до max + 1)

const getRandomInteger = function (min, max) {
  const rand = Math.abs(min + Math.random() * (max + 1 - min));
  return Math.round(rand);
};
getRandomInteger(0, 15);


// Функция, возвращающая случайное число с плавающей точкой
// из переданного диапазона включительно

const getRandomFloat = function (min, max, fraction = 0) {
  const fractionDegree = 10 ** fraction;
  return (Math.abs(Math.random() * (max - min) + min) * fractionDegree) / fractionDegree;
};
getRandomFloat(0, 100, 12);
