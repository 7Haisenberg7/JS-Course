class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    withDiscount(percent) {
        return this.price - this.price * percent / 100;
    }

    toJSON() {
        return { name: this.name, price: this.price };
    }

    static fromJSON(obj) {
        const data = typeof obj === 'string' ? JSON.parse(obj) : obj;
        return new Product(data.name, data.price);
    }
}

const keyboard = new Product('Клавиатура', 1250);
console.log('Со скидкой 10%:', keyboard.withDiscount(10));

const json = JSON.stringify(keyboard);
const restored = Product.fromJSON(json);

console.log('Восстановленный:', restored);
console.log('instanceof Product:', restored instanceof Product);
console.log('Прототип совпадает?', Object.getPrototypeOf(restored) === Product.prototype);
