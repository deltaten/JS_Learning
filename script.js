'use strict';
// ============================ init variable ============================
var letBorderWidth = 1; // существует еще до её объявления и видна везде
let second = 2; // создается когда код доходит до неё. Локальна! только внутри {...}
const pi = 3.14;

// ============================ type date ============================
var number = 5;
var string = 'dadaw';
var symb = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(letBorderWidth);

// ============================ object ============================
let = persone = {
	name: "John",
	age: 25,
	isMail: false
};
console.log(persone.name); // получение свойства из объекта
console.log(persone["age"]); // получение свойства из объекта

// ============================ array ============================
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 1, 2.32, true];
console.log(arr[0], arr[1]);

// alert('Hello');
// let answer = confirm('you are pidor?') // если пользователь нажмет "ок" то в answer передается thrue
// console.log(answer);

// let answer = prompt('you are pidor?', 'net') // поолучает ино от пользователя в формате СТРОКИ!
// console.log(typeof(answer)); // вывод типа переменой

// ============================ operators ============================
// console.log("arr" + " - object")

// let answer2 = +prompt('введите ЧИСЛО?', '18') // плюс превращает строку в число
// console.log(typeof(answer2)); // вывод типа переменой

let incr = 10,
	 decr = 10;

console.log(incr++);
console.log(incr--);

// = - присваивание
// == - сравнивание
// === - строгое сравнивание по типу данных
console.log("2" === 2); // false

// && - логическое И
// || - логическое ИЛИ
