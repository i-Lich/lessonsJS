// //Функции. Задачи.
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
//
// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
//
// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
//
//     getCodeStringFromText(‘hello’) // “104 101 108 108 111”
//
// подсказка: для получения кода используйте специальный метод
//
// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

//  //1
// function multiply() {
//     var res = 1;
//     if(arguments.length === 0) return 0;
//     for(let i = 0; i < arguments.length; i++) {
//         res *= arguments[i];
//     }
//     return res;
// }
// console.log(multiply(1,2,3,10));

// //  2
// // Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
//
// function reverseString(string) {
//     let newStr = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         newStr += string[i];
//     }
//     return newStr;
// }
// console.log(reverseString('Abcdefg'));

// //  3
//
// function getCodeStringFromText(string) {
//     let str = '';
//     for (let i = 0; i < string.length; i++) {
//         str += (string[i] + ' - ' + string.charCodeAt(i) + '\n');
//     }
//     return str;
// }
// console.log(getCodeStringFromText('hello'));

// //  4
// // Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
// function guessTheNumber(number) {
//     let rand = +(Math.random() * (10 - 1) + 1).toFixed();
//     // if (0 <= number <= 10) { // //так можно задавать условие?
//     if (number <= 10 && number >= 1)
//         if (number === rand) {
//             console.log('You win!');
//         } else {
//             console.log(`You have lost, a hidden number - ${rand}. You number - ${number}.`);
//      } else{
//             console.log(' number not in 1..10');
//     }
// }
// guessTheNumber(5);


// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
// Данное задание выполните после того как познакомитесь с методами массивов.
//
// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
//     doubleArray([1,2,3]) // [1,2,3,1,2,3]
//
// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов:
//     changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
//
// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
//     Данное задание выполните после того как познакомитесь с методами массивов
//
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
//
//
// //  5
// function pushAndReturnArray(limit) {
//     let arr = [];
//     for (let i = 1; i <= limit; i++) {
//     arr.push(i);
//     }
//     return arr;
// };
// console.log(pushAndReturnArray(37));

// //  6
// // 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
// //     doubleArray([1,2,3]) // [1,2,3,1,2,3]
// let arr = [1,2,3,4,5,6];
// function doubleArray(array) {
//     let newArr = array;
//     newArr = newArr.concat(array);
//     return newArr;
// }
// console.log(doubleArray(arr));

// //  7
// // 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов:
// //     changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
// function changeCollection(...arrays) {
//     let newArr = [];
//     for (let value of arrays){
//         value.splice(0, 1);
//         newArr = newArr.concat(value);
//     }
//     return newArr;
// }
// let a = [1,2,3];
// let b = ['a', 'b', 'c'];
// let c = ['one', 'two', 'three'];
// console.log(changeCollection(a, b, c));

//  8
// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
//     Данное задание выполните после того как познакомитесь с методами массивов
let users = [
    {
        id: 1,
        name: 'Fedor',
        gender: 'male'
    },
    {
        id: 2,
        name: 'Pavel',
        gender: 'male'
    },
    {
        id: 3,
        name: 'Oleg',
        gender: 'male'
    },
    {
        id: 4,
        name: 'Olga',
        gender: 'female'
    },
]
function checkUsers(users, key, value) {
    if (arguments.length < 3){
        alert('Переданы не все аргументы!');
        return false;
    }
    let res = [];
    for (user of users){
        if (user[key] === value){
            res.push(user);
        }
    }
    return res;
}
console.log(checkUsers(users, 'gender', 'male'));