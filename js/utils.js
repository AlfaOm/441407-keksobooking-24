
// Функция, возвращающая случайное целое число
const getRandomInteger = function (min, max) {
  const rand = Math.abs(min + Math.random() * (max + 1 - min));
  return Math.round(rand);
};

// Функция, возвращающая случайное число с плавающей точкой
const getRandomFloat = function (min, max, fraction = 1) {
  const fractionDegree = 10 ** fraction;
  const result = ((Math.abs(Math.random() * (max - min) + min) * fractionDegree) / fractionDegree);
  return result.toFixed(fraction);
};

const getRandomArrayElement = function (elements) {
  return elements[_.random(0, elements.length - 1)];
};

export {getRandomInteger, getRandomFloat, getRandomArrayElement};
