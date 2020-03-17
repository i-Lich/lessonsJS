//Циклы. Задачи.

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.
// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
//     где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
//     6. Дан объект:
//     let list = {
//         name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

// // 1
//
// function firstLettersToUppercase(string) {
//     let newStr = string[0].toUpperCase();
//     for (let i = 1; i < string.length;i++) {
//         if (string[i] === ' ') {
//             newStr += ' ';
//             newStr += string[i + 1].toUpperCase();
//             i++;
//         } else {
//             newStr += string[i];
//         }
//     }
//     return newStr;
// }
//
// let string = 'i am in the easycode da da Dd Da';
// console.log(firstLettersToUppercase(string));

// // 2
//
// let string = 'tseb eht ma i';
// let newStr = '';
// for (let i = string.length - 1; i >= 0; i--){
//     newStr += string[i];
// }
// console.log(newStr);

// 3 факториал
// function factorial(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++){
//         res *= i;
//     }
//     return res;
// }
// console.log(factorial(10));

// // 4
// let string = 'JavaScript is a pretty good language';
// let newStr = string[0].toUpperCase();
// for (let i = 1; i < string.length;i++) {
//     if (string[i] === ' ') {
//         newStr += string[i + 1].toUpperCase();
//         i++;
//     } else {
//         newStr += string[i];
//     }
// }
// console.log(newStr);
//
// //  5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for (let value of numbers){
//     if (value % 2){
//         console.log(value);
//     }
// }

// //  6
// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29
// };
// for (let item in list){
//     if (typeof(list[item]) === 'string'){
//         list[item] = list[item].toUpperCase();
//     }
// }
// console.log(list);