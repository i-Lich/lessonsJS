// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
//     const rectangle = {width:..., height:..., getSquare:...};
// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
//     const price = {
//         price: 10,
//         discount: '15%',
//         ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
//

// //  1
// const rectangle = {
//     width: 10,
//     height: 5,
//     getSquare: getSquare
// };
//
// const rectangle2 = {
//     width: 101,
//     height: 5,
//     getSquare: getSquare
// };
//
// function getSquare() {
//     return  this.width * this.height;
// }
//
// console.log(rectangle2.getSquare());

// //  2
//
// // Создать объект, у которого будет цена товара и его скидка, а также
// // два метода: для получения цены и для расчета цены с учетом скидки:
// //     const price = {
// //         price: 10,
// //         discount: '15%',
// //         ... };
// // price.getPrice(); // 10
// // price.getPriceWithDiscount(); // 8.5
//
// let product = {
//     price: 100,
//     discount: '20%',
//     getPrice: getPrice,
//     getPriceWithDiscount: getPriceWithDiscount,
// };
//
// function getPrice() {
//     return this.price;
// }
//
// function getPriceWithDiscount() {
//     return  this.price - ( this.price * (parseFloat(this.discount) / 100));
// }
//
// console.log(`price = ${product.getPrice()}`);
// console.log(`discount = ${product.discount}`);
// console.log(`price with discount = ${product.getPriceWithDiscount()}`);

// // //  3
// // 3. Создать объект, у которого будет поле высота и метод “увеличить
// // высоту на один”. Метод должен возвращать новую высоту:
// //     object.height = 10;
// // object.inc(); // придумать свое название для метода
// // object.height; // 11;
//
// let obj = {
//     height: 10,
//     incHeightBy1(){
//         return ++this.height;
//     }
// };
//
// console.log(`Height = ${obj.height}`);
// console.log(`New Height = ${obj.incHeightBy1()}`);

// //  4
// // 4. Создать объект “вычислитель”, у которого есть числовое свойство
// // “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// // Методы можно вызывать через точку, образуя цепочку методов:
// //     const numerator = {
// //         value: 1,
// //         double: function () {...},
// //         plusOne: function () {...},
// //         minusOne: function () {...},
// //     }
// // numerator.double().plusOne().plusOne().minusOne();
// // numerator.value // 3
//
// let numerator = {
//     value : 1,
//     double() {
//         this.value *= 2;
//         return this;
//     },
//     plusOne() {
//         ++this.value;
//         return this;
//     },
//     minusOne() {
//         --this.value;
//         return this;
//     }
// };
// console.log(numerator.double().double().plusOne().plusOne().minusOne());
// console.log(`new value = ${numerator.value}`);

// //  5
// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)
// Создать объект из предыдущей задачи. Создать второй объект,
//     который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.
//     Даны объект и функция:
//     let sizes = {width: 5, height: 10},
//         getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

// // 5.1
// let products = {
//     price : 10,
//     quantity: 15,
//     getTotalPrice(){
//         return  this.quantity * this.price;
//     }
// };
// console.log(`quantity - ${products.quantity}, prcie = ${products.price}. Total prcie = ${products.getTotalPrice()}`);

// //  5.2
// // Создать объект из предыдущей задачи. Создать второй объект,
// //     который описывает количество деталей и цену за одну деталь. Для
// // второго объекта нужно узнать общую стоимость всех деталей, но
// // нельзя создавать новые функции и методы. Для этого
// // “позаимствуйте” метод из предыдущего объекта.
// let prod1 = {
//     price : 10,
//     quantity: 15,
//     getTotalPrice(){
//         return  this.quantity * this.price;
//     }
// };
// let prod2 = {
//   price: 5,
//   quantity: 2
// };
//
// console.log(prod1.getTotalPrice.call(prod2));

// //  5.3
// //     Даны объект и функция:
// //     let sizes = {width: 5, height: 10},
// //         getSquare = function () {return this.width * this.height};
// // Не изменяя функцию или объект, получить результат функции
// // getSquare для объекта sizes
// let sizes = {
//     width: 5,
//     height:10
// };
// let getSquare = function () {
//     return this.width * this.height;
// };
//
// console.log(getSquare.call(sizes));