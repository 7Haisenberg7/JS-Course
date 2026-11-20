    'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.withDiscount = function (percent) {
    return this.price - this.price * percent / 100;
};
function PhysicalProduct(name, price, weight) {
    Product.call(this, name, price); 
    this.weight = weight;
}
PhysicalProduct.prototype = Object.create(Product.prototype);
PhysicalProduct.prototype.constructor = PhysicalProduct;
PhysicalProduct.prototype.shippingCost = function () {
    return this.weight * 100;
};
const keyboard = new PhysicalProduct('Клавиатура', 1250, 1.5);
console.log(keyboard.name, 'со скидкой 10%:', keyboard.withDiscount(10));
console.log('Доставка:', keyboard.shippingCost(), '₽');
console.log('Наследник Product?', keyboard instanceof Product);
