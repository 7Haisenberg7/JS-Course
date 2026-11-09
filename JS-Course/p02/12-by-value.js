function increaseNumber(n){
    n = n+1;
    console.log('Внутри функции n = ', n);
}
let qty = 1;
increaseNumber(qty);
console.log('Снаружи qty = ', qty);

function increaseQty(item){
    item.qty= item.qty + 1
}
const line = {name : 'Мышь', qty: 2};
increaseQty(line);
console.log('После вызова:', line);

function replaceItem(item){
    item= {name : 'Новый товар', qty:99};
}
replaceItem(line);
console.log('После replaceITem:', line);

const withInCreaseQty = (item) => ({...item, qty : item.qty +1});
const before={name: 'Клавиатура', qty : 1};
const after= withInCreaseQty(before)
console.log('before:' , before);
console.log('after: ', after);
console.log('Это один объект', before === after)