            // Преобразование примитивов. Задачи.
//     Чему равно а, почему?
//
// let a = 0 || 'string';
// let a = 1 && 'string';
//  let a = null || 25;
// let a = null && 25;
// let a = null || 0 || 35;
// let a = null && 0 && 35;
// console.log(a);
//
// Что отобразится в консоли. Почему?
//
// console.log(12 + 14 + '12');
// console.log(3 + 2 - '1');
// console.log('3' + 2 - 1);
// console.log(true + 2);
// console.log(+'10' + 1);
// console.log(undefined + 2);
// console.log(null + 5);
// console.log(true + undefined);
//

            // If else. Задачи.
//
//1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
//2 Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
//
// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
//
// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
// //
            // 1
// var value = 'hidden';
// if (value === 'hidden'){
//     value = 'visible';
//     } else {
//     value = 'hidden';
// }
            // или так
// let value = 'hidden';
// value = value === 'hidden' ? 'visible' : 'hidden';
// console.log(value);
            //2
// let x = 45;
// if (x === 0) {
//     x = 1;
// } else if(x < 0) {
//     x = 'less then zero';
// } else x *= 10;
// console.log(x);
            //4
// let car = {
//     name: 'Lexus',
//     age: 10,
//     create: 2008,
//     needRepair: false
// }
// if (car.age > 5){
//     console.log('Need repair');
//     car.needRepair = true;
// } else {
//     car.needRepair = false;
// }
            //5
// let item = {
//     name: 'Intel core i7',
//     price: '100$',
//     discount: '15%'
// };
// // delete item.discount;
// if (('discount' in item) && (item.discount != NaN) && (item.discount != undefined) && ('price' in item) && (item.price != NaN)){
//     item.priceWithDiscount = parseFloat(item.price) / 100 * parseFloat(item.discount);
//     console.log(`true! price with discount ${item.priceWithDiscount} $`);
// } else console.log(`false, no discount. Price = ${item.price}`);

            //6
            // 5. Дан следующий код:
            //
            //     let product = {
            //         name: “Яблоко”,
            // price: “10$”
            // };
            //
            // let min = 10; // минимальная цена
            // let max = 20; // максимальная цена
            //
            // Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
            //
// let product = {
//     name: 'Яблоко',
//     price: '10$'
// };
// let min = 10;
// let max = 20;
// if ((parseFloat(product.price) >= min) && (parseFloat(product.price) <= max)){
//     console.log(product.name);
// } else {
//     console.log('Товаров не найдено');
// }
