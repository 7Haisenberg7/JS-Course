const Product = {
    name : 'Клавиатура',
    price: 1250,
    dimensions : {width: 44, height:3},
};
const {name , price}= Product;
const {price: cost , stock=0}=Product;
const {dimensions: {width}}= Product;
const {name : title, ... rest }=Product;
console.log(name , price , cost , stock , width);
console.log(rest);
function renderLine({ name, price, dimensions: { width = 0 } = {} }) {
    return `${name}: ${price} ₽, ширина ${width} см`;
}
console.log(renderLine(Product));
console.log(renderLine({name : 'Кабель', price : 300}));

const [first, , third = 'Нет'] = ['Клавиатура' , 'Мышь'];
console.log(first ,third);
let a = 1, b=2;
[a,b] = [b,a];
console.log('a = ', a , 'b = ', b);