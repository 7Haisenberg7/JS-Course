  'use strict';
function Product(name, initialPrice) {
    this.name = name;
    let _price = initialPrice;
    Object.defineProperty(this, 'price', {
        enumerable: true,
        get() {
            return _price;
        },
        set(value) {
            if (value < 0) {
                throw new RangeError('Цена не может быть отрицательной');
            }
            _price = value;
        },
    });
    Object.defineProperty(this, 'formattedPrice', {
        enumerable: true,
        get() {
            return `${_price.toFixed(2)} ₽`;
        },
    });
}
const mouse = new Product('Мышь', 790);
console.log(mouse.formattedPrice); 
mouse.price = 650;
console.log(mouse.formattedPrice); 
