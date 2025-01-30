// Задание 1
// Преобразовать строку 'js' в верхний регистр.
console.log("js".toUpperCase());

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.

const checkStartWithStr = (arr, str) => {
  let newarr = arr.filter((item) =>
    item.toLowerCase().startsWith(str.toLowerCase())
  );
  return newarr;
};

// console.log(checkStartWithStr(['Hello wold', 'hola from Spain', 'hell', 'hello', 'hello from UsA'], 'hello'));

// Задание 3
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

let num = 32.58884;
console.log(`Округление до меньшего целого: ${Math.floor(num)}`);
console.log(`Округление до большего целого: ${Math.ceil(num)}`);
console.log(`Округление до ближайшего целого: ${Math.round(num)}`);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

const randomNum = () => console.log(Math.floor(Math.random() * 10) + 1);
// randomNum()

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

const createRandomNumbersArr = (num) => {
  let arr = Array.from({ length: num / 2 }, () =>
    Math.round(Math.random() * num)
  );
  return arr;
};
// console.log(createRandomNumbersArr(5));

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

const getRandomNum = (num1, num2) => {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(getRandomNum(3, 5));

// Задание 8
// Вывести в консоль текущую дату.

console.log(new Date().toLocaleDateString("ru-Ru"));

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = new Date();
let plus73Days = new Date(currentDate);
plus73Days.setDate(plus73Days.getDate() + 73);
console.log(plus73Days.toLocaleDateString("ru-Ru"));

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

const strDate = (date) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  let str = `Дата: ${date.toLocaleDateString("ru-Ru", options)} — это ${date.toLocaleDateString("ru-Ru", {weekday: "long",})}.\nВремя: ${date.toLocaleTimeString("ru-Ru")}`;
  return str;
};

console.log(strDate(currentDate));
