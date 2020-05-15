// // 1. Создайте функцию которая бы умела делать:
// //     minus(10)(6); // 4
// // minus(5)(6); // -1
// // minus(10)(); // 10
// // minus()(6); // -6
// // minus()(); // 0
// // Подсказка, функция minus должна возвращать другую функцию.
//
// function minus(x = 0) {
//     return function (y = 0) {
//         return x - y;
//     }
// }
//
// console.log(minus(10)(6));

// // 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// //     function multiplyMaker ...
// // const multiply = multiplyMaker(2);
// // multiply(2); // 4 (2 * 2)
// // multiply(1); // 4 (4 * 1)
// // multiply(3); // 12 (4 * 3)
// // multiply(10); // 120 (12 * 10)
//
// function multiplyMaker(x = 0) {
//     return function (y) {
//         return x *= y;
//     }
// }
// const multiply = multiplyMaker(2);
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)
// console.log(multiply(10)); // 120 (12 * 10)

// // 3. Реализовать модуль, который работает со строкой и имеет методы:
// //     a. установить строку
// // i. если передано пустое значение, то установить пустую строку
// // ii. если передано число, число привести к строке
// // b. получить строку
// // c. получить длину строки
// // d. получить строку-перевертыш
// // Пример:
// //     модуль.установитьСтроку(‘abcde’);
// // модуль.получитьСтроку(); // ‘abcde’
// // модуль.получитьДлину(); // 5
//
// const myString = (
//     function (str = '') {
//     function setString(value) {
//         if (value) str = value.toString();
//             else str = '';
//     }
//     function getString() {
//         return str;
//     }
//     function getLengthString() {
//         return str.length;
//     }
//     function getReverseString() {
//         return str.split('').reverse().join('');
//     }
//     return {
//         setString: setString,
//         getString: getString,
//         getLengthString: getLengthString,
//         getReverseString: getReverseString
//     };
// }());
//
// myString.setString('123456abcdefg');
// console.log(myString.getString());
// console.log(myString.getLengthString());
// console.log(myString.getReverseString());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
//
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
//
// Также можно вызывать методы цепочкой:
//     модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const myCalc = (
    function (summ = 0) {
    function setValue(value) {
        summ = parseFloat(value);
        return this;
    }
    function plus(y) {
        return summ += y;
    }
    function minus(y) {
        return summ -= y;
    }
    function multiplication(y) {
        return summ *= y;
    }
    function division(y) {
        return summ /= y;
    }
    function toPower(y) {
        return summ = Math.pow(summ, y);
    }
    function getValue() {
        return summ.toFixed(2);
    }
    return {

        setValue: setValue,
        plus: plus,
        minus: minus,
        multiplication: multiplication,
        division: division,
        toPower: toPower,
        getValue: getValue
    };
}());

myCalc.setValue('123abcdefg');
console.log(myCalc.getValue());
console.log(myCalc.plus(2));
console.log(myCalc.division(5));
console.log(myCalc.toPower(2));
console.log(myCalc.getValue());
console.log(myCalc.minus(525));
myCalc.setValue(100.222).toPower(2);
console.log(myCalc.getValue());