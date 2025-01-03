// Задание 1
// Создайте программу проверки правильности введенного пароля по следующему алгоритму:
// Создайте переменную «пароль» и присвойте ей произвольный текст-пароль.
// (let password = 'пароль';)
// Создайте вторую переменную и с помощью prompt() спросить у пользователя «Введите пароль».
// Добавьте проверку: если пользователь вводит верный пароль, вывести на экран «Пароль введен верно».
// Добавьте проверку: если пользователь вводит неверный пароль, вывести на экран "Пароль введен неправильно".

let password = 'пароль';
let userInputPassword = prompt('Введите пароль');
(password === userInputPassword) ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

// Задание 2
// Создайте переменную с и запишите в нее любое число. Если с больше 0 и меньше 10, то выведите в консоль «Верно», иначе выведите «Неверно».
// Проверьте работу скрипта при значении переменной c, равной 0, 10, −3, 2.

for (let c of [0, 10, -3, 2]) {
    (c > 0 && c < 10) ? console.log('Верно'): console.log('Неверно');
}

// Задание 3
// Создайте две переменные — d и e, запишите в них любые числа.
// Если одна из переменных больше 100, выведите в консоль «Верно», иначе выведите «Неверно».

let d = 15;
let e = 144;

(d > 100 || e > 100) ? console.log('Верно'): console.log('Неверно');

// Задание 4
// Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23'.

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// Задание 5
// Напишите программу, которая определяет по номеру месяца в году, к какому сезону этот месяц принадлежит. Например, 1-й месяц (он же январь) принадлежит к сезону «зима».
// Для написания программы используйте оператор switch. Для обозначения номера месяца используйте переменную monthNumber, которая равна 12. Пропишите условие, при котором программа не будет выполняться (номер месяца больше 13).

let monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("Месяца с таким номером не существует");
    break;
}


// Дополнительные задания

// Задание 1
// Создайте программу, проверяющую число на четность/нечетность по следующему алгоритму:
// Создайте переменную и присвойте ей значение с помощью метода «Пожалуйста, введите любое число». prompt()
// Добавьте проверку: является ли введенное значение числом.
// Добавьте проверку, является ли число четным или нет.
// Добавьте проверку: если число четное, выводите пользователю сообщение «Число четное» с помощью alert. Если число нечетное, то вывести пользователю сообщение «Число нечетное» с помощью alert.

let number = Number(prompt('Пожалуйста, введите любое число'));

if (number) {
    if (number % 2 === 0) {
        alert(`${number} - число четное`);
    } else {
        alert(`${number} - число нечетное`);
    }
} else {
    alert('Введено не число');
}

// Задание 2
// Представим, что мы работаем в банке. У нашего банка есть сайт, на который можно зайти с компьютера или телефона, а также мобильное приложение. И нам, и клиенту удобнее с телефона пользоваться мобильным приложением. Поэтому каждый раз, когда пользователь заходит на сайт с телефона, мы должны выдавать ему ссылку на скачивание приложения. Но мы не знаем, iOS или Android он использует.
// Напишите программу, которая определяет, чем пользуется клиент (iOS или Android), и выдает соответствующее сообщение для обоих вариантов.
// Объявите переменную clientOS, которая равна 0 или 1. (0 — iOS, 1 — Android).
//  При отработке программы в консоли должно выдаваться сообщение об установке соответствующего приложения.
// Например, для iOS оно будет звучать так: «Установите версию приложения для iOS по ссылке».
// А для Android так: «Установите версию приложения для Android по ссылке».

let clientOS = 1;
let clientOSName;

clientOSName = (clientOS === 0) ? 'iOS' : 'Android';
console.log(`Установите версию приложения для ${clientOSName} по ссылке`);


// Задание 3
// К нам пришли коллеги и сообщили, что нам нужно знать не только операционную систему телефона, но и год его создания: от этого зависит, подойдет ли приложение для телефона или оно просто не установится.
// Если телефон произведен с 2015 по нынешний год, то приложение будет работать корректно.
// Если телефон произведен ранее 2015 года, то клиенту нужно посоветовать установить облегченную версию приложения.
// Ваша задача: написать программу, которая выдает соответствующее сообщение клиенту при наличии двух условий: операционной системы телефона (iOS или Android) и года производства.
//  Если год выпуска ранее 2015 года, то к сообщению об установке нужно добавить информацию об облегченной версии.
// Например, для iOS оно будет звучать так: «Установите облегченную версию приложения для iOS по ссылке».
// А для Android так: «Установите облегченную версию приложения для Android по ссылке».
//  При этом для пользователей с телефоном с 2015 года выпуска нужно вывести обычное предложение об установке приложения.
// Для обозначения года создания используйте переменную clientDeviceYear, где необходимо указать 2015 год

let clientDeviceYear = 2014

if (clientDeviceYear >= 2015) {
    console.log(`Установите версию приложения для ${clientOSName} по ссылке`);
} else {
    console.log(`Установите облегченную версию приложения для ${clientOSName} по ссылке`);
}