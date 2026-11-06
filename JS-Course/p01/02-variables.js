let productName = 'Клавиатура';
console.log(productName);
 
productName = 'Мышь';
console.log(productName);

let stock;
console.log('stock =', stock);
stock = 12;
console.log('stock =', stock);

const VAT = 20;
console.log('НДС, %:', VAT);

const tags = ['usb', 'rgb'];
tags.push('wireless');
console.log(tags);

let Price= 100;
let price = 200;      // другая переменная: регистр важен
let $total = 300;     // допустимы $ и _
let _count = 4;
let totalPriceWithDiscount = 0; // camelCase
console.log(price, Price, $total, _count, totalPriceWithDiscount);

console.log(discount);
var discount = 15;

console.log('oldStyle до объявления:', oldStyle);
var oldStyle = 'var';
 
if (true) {
    var insideVar = 'видна снаружи блока';
    let insideLet = 'видна только в блоке';
}
console.log(insideVar);
console.log(typeof insideLet);

console.log(typeof 42); //Число
console.log(typeof 'Клавиатура') //Строка
console.log(typeof true) //логический
console.log(typeof undefined) // Не задано
console.log(typeof null) //Пусто
console.log(typeof 12344567890987654321n) // Большое целое число
console.log(typeof Symbol ('id')); // Символ
console.log(typeof {name: 'Мышь'}) //Объект

let value =10;
console.log(value, typeof value )
value = 'Десять'
console.log(value, typeof value)

console.log(1/0, -1/0)
console.log('abc'*2)
console.log(typeof NaN)
console.log(Number.MAX_SAFE_INTEGER)
 console.log(9210392032910 + 1) // Точность потеряна
console.log(9007199254740992n + 1n);

const name = 'Клавиатура'
const model = 'K-120'
const price2 = 1250;
const line = `${name} ${model} стоит ${price}₽`
console.log(line)
console.log(`Через год: ${price*1.1}₽`)

let coupon //еще не задано
let manager= null // Известно что менеджера нет
console.log(coupon, manager);
console.log(typeof [1,2,3], Array.isArray([1,2,3]))



