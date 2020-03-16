"use strict";

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
//
// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
//
// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
//     5. Получить число из строки ‘100$’

// 1
// var value = Math.PI.toFixed(2);
// console.log(value);

// 2
// let numbers = [15, 11, 16, 12, 51, 12, 13, 51];
// console.log(`Max = ${Math.max.apply(null, numbers)}`);
// console.log(`Min = ${Math.min.apply(null, numbers)}`);

// 3 a
// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log(getRandom(1,100).toFixed(2));

// 3 b
// let x = 1000;
// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log(getRandom(0, x).toFixed());

// 4

// console.log((Math.ceil((0.6 + 0.7) * 10) / 10));
// .toFixed(1)  // <---

// 5
// let str = '100$';

// console.log(parseInt(str));