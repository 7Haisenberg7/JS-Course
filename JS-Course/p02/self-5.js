    
function increaseNumber(n) {
    n = n + 1;
}
let qty = 1;
increaseNumber(qty);
console.log('Исходное число:', qty);


function increaseQty(item) {
    item.qty = item.qty + 1;
}
const mouse = { name: 'Мышь', qty: 1 };
increaseQty(mouse);
console.log('Исходный объект после increaseQty:', mouse); 


const withIncreasedQty = (item) => ({ ...item, qty: item.qty + 1 });
const keyboard = { name: 'Клавиатура', qty: 1 };
const updatedKeyboard = withIncreasedQty(keyboard);

console.log('Старый объект:', keyboard);       
console.log('Новый объект:', updatedKeyboard); 
