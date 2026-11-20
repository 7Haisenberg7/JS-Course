class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    shippingCost() {
        return 0;
    }
}
class PhysicalProduct extends Product {
    constructor(name, price, weightKg) {
        super(name, price);
        this.weightKg = weightKg;
    }
    shippingCost() {
        return 300 + Math.ceil(this.weightKg) * 50;
    }
}
class DigitalProduct extends Product {
}
const order = [
    new PhysicalProduct('Монитор', 15990, 4.2),
    new DigitalProduct('Игра', 2499),
    new PhysicalProduct('Мышь', 790, 0.2),
];
let totalShipping = 0;
for (const item of order) {
    totalShipping += item.shippingCost();
}
console.log('Общая стоимость доставки:', totalShipping, '₽');
