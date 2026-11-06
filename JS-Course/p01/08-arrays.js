const prices = [990 , 1250 , 430, 2100];
console.log(prices)
console.log('Первый:', prices[0], 'Второй:', prices[1]);
console.log('Длина:', prices.length);
console.log('Последний:', prices[prices.length - 1], prices.at(-1));
console.log('Нет такого:', prices[10]);

prices[1]= 1199;
prices.push(760); 
const removed = prices.pop();
prices.unshift(100);
console.log(prices, 'Удален:', removed)

const cart = [
    ['Клавиатура', 1250, 1],
    ['Мышь', 790, 2],
];
console.log(cart[1]);
console.log(cart[1][0], 'x', cart[1][2]);


const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log('original:', original);
console.log(original === copy);
const realCopy = [...original];
realCopy.push(5);
console.log('original:', original, 'realCopy:', realCopy);
