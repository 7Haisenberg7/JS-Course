    'use strict';
const product = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: { width: 44, height: 3, depth: 13 },
    tags: ['usb', 'rgb'],
    describe() {
        return `${this.name}: ${this.price} ₽ (${this.dimensions.width} см)`;
    },
};
console.log(product.describe());
const fn = product.describe;
const boundDescribe = product.describe.bind(product);
console.log(boundDescribe());
