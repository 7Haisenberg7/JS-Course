const shopName = 'Мини-магазин'; 
function printHeader() {
    const title = 'Каталог'; 
    console.log(shopName, '|', title);
}
printHeader();
console.log(title);
const stock = 3;
if (stock > 0) {
    const message = 'есть в наличии';
    console.log('внутри блока:', message);
}
console.log('снаружи блока:', typeof message);


const discount =5;
function vipPrice(price){
    const discount =20;
    return price = price * discount
}
console.log('VIP- price', vipPrice(1000), 'Внешняя скидка:', discount);

let visits = 0;
function registerVisit() {
    visits++;  
}
registerVisit();
registerVisit();
console.log('визитов:', visits);
