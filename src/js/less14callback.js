//1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
//
// Первая функция возвращает строку “New value: ” и результат обработки:
//
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
//
//
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

function actionsWithArray(array, handler) {
    let res = 'New value: ';
    for (let i = 0; i < array.length; i++){
        res += handler(array[i]);
    }
    return res;
}

let arr = ['my', 'name', 'is', 'Trinity'];
let arr2 = [1, 2, 3, 4];
let arr3 = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
let arr4 = ['abc', 'def', '123'];

let trimArrayAndCapitalize = actionsWithArray(arr, firstLatterToUppercase);

function firstLatterToUppercase(item){
    return item[0].toUpperCase() + item.slice(1);
}

function multiplyBy10(item) {
    return item * 10 + ', ';
}

function returnNameAndAge(item){
    return `${item.name} is ${item.age}, `;
}

function reverseItem(item){
    return item.split("").reverse().join("") + ', ';
}

console.log(trimArrayAndCapitalize);
console.log(actionsWithArray(arr2, multiplyBy10));
console.log(actionsWithArray(arr3, returnNameAndAge));
console.log(actionsWithArray(arr4, reverseItem));