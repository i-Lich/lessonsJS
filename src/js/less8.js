// CТРОКИ
// let string = ‘some test string’;
// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ
//
// 1. Получить первую и последнюю буквы строки
// 2. Сделать первую и последнюю буквы в верхнем регистре
// 3. Найти положение слова ‘string’ в строке
// 4. Найти положение второго пробела (“вручную” ничего не считать)
// 5. Получить строку с 5-го символа длиной 4 буквы
// 6. Получить строку с 5-го по 9-й символы
// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”

// let string = 'some test string';

// 1
// let first = string[0];
// let last = string[string.length-1];
//через regExp
// var matches = string.match(/^.|.$/g);
// console.log(matches);

// 2

// let first = string[0].toUpperCase();
// let last = string[string.length-1].toUpperCase();
// console.log(first, ' ', last);

// 3
//
// let str = string.indexOf('string');
// if (str) {
//     console.log('true', str);
// }

// 4
//
// let firstWhitespace = string.indexOf(' ');
// let str = string.indexOf(' ', ++firstWhitespace);
// if (str) {
//     console.log('true', str);
// }

// 5
//
// let str = string.substr(5,  4);
// console.log(str);

// 6
//
// let str = string.slice(5, 9);
// console.log(str);

// 7

// let str = string.slice(0,  -6);
// console.log(str);

// 8
// let a = 20;
// let b = 16;
// string = a.toString() + b.toString();
//либо так
// string = '' + a + b;
// console.log(string);