    class CartLine {
    #qty = 1;

    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    get qty() {
        return this.#qty;
    }

    set qty(value) {
        if (!Number.isInteger(value) || value < 1) {
            throw new RangeError(`Недопустимое количество: ${value}`);
        }
        this.#qty = value;
    }

    get sum() {
        return this.price * this.#qty;
    }
}

const items = [];

function addLine(name, price, qty) {
    try {
        const line = new CartLine(name, price, qty);
        items.push(line);
        console.log('Добавлено:', line.name, 'x', line.qty);
    } catch (error) {
        console.log('Ошибка добавления:', error.name, '-', error.message);
    }
}

addLine('Мышь', 790, 2);
addLine('Клавиатура', 1250, -1); 
addLine('Коврик', 450, 1);

console.log('Успешно добавлено позиций:', items.length);
