// //Тернарный оператор. Switch case. Задачи.
//
// Записать в виде switch case следующее условие:
//     if (a === ‘block’) {
//     console.log(‘block’)
// } else if (a === ‘none’) {
//     console.log(‘none’)
// } else if (a === ‘inline’) {
//     console.log(‘inline’)
// } else {
//     console.log(‘other’)
// }
//     Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
//         Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.


// 1
// let a = 'block';
// switch (a) {
//     case "block":{
//         console.log('block');
//         break;
//     }
//     case 'none':{
//         console.log('none');
//         break;
//     }
//     case 'inline':{
//         console.log('inline');
//         break;
//     }
//     case 'other':{
//         console.log('other');
//         break;
//     }
//     default:{
//         console.log('undefined');
//     }
// }

////2 Используя if, записать условие:
// //  если переменная равна нулю, присвоить ей 1;
// // если меньше нуля - строку “less then zero”;
// // если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let x = 22;
// x = x === 0 ? 1 : x < 0 ? 'less then zero' : x *= 10;
// console.log(x);