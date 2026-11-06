let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log('Сумма 1..100 =', sum);


const prices = [990,1250,430,2100,760];
let total = 0;
let max = prices[0];
for(let i = 0; i < prices.length; i++){
    total +=prices[i];
    if(prices[i] > max) max=prices[i]
}
console.log('Сумма', total , 'максимум', max, 'Средне', total / 
prices.length);

for(const price of prices){
    if(price > 1000) console.log('Дорогой товар:', price);
}

const product = {name:'Мышь', price:790, stock:3};
for(const key in product){
    console.log(key, '->', product[key]);
}


let n=4073;
let digits=0;
while(n>0){
    n = Math.floor(n/10);
    digits++;
}
console.log('Цифр в числе 4073:', digits);
let attemp=10;
do{
    console.log('do...while выполнился, attemp=', attemp);
}while (attemp<5);


for(const price of prices){
    if(price<500) continue;
    if (price>2000) break;
    console.log('Подходит:', price);
}

for (let row = 1; row <= 3; row++) {
    let line = '';
    for (let col = 1; col <= 5; col++) {
        line += String(row * col).padStart(4);
    }
    console.log(line);
}
