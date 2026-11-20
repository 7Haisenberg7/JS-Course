    class Cart {
    static MAX_ITEMS = 3;
    #items = [];

    #findIndex(name) {
        return this.#items.findIndex((i) => i.name === name);
    }

    add(name, price, qty = 1) {
        const index = this.#findIndex(name);
        if (index >= 0) {
            this.#items[index].qty += qty;
            return;
        }
        if (this.#items.length >= Cart.MAX_ITEMS) {
            console.warn(`Достигнут лимит позиций в корзине: ${Cart.MAX_ITEMS}`);
            return;
        }
        this.#items.push({ name, price, qty });
    }

    remove(name) {
        const index = this.#findIndex(name);
        if (index >= 0) {
            this.#items.splice(index, 1);
        }
    }

    changeQty(name, qty) {
        const index = this.#findIndex(name);
        if (index >= 0) {
            this.#items[index].qty = qty;
        }
    }

    get count() {
        return this.#items.length;
    }

    get total() {
        return this.#items.reduce((sum, i) => sum + i.price * i.qty, 0);
    }
}

const cart = new Cart();
cart.add('Клавиатура', 1250);
cart.add('Мышь', 790, 2);
cart.add('Коврик', 450);
cart.add('Монитор', 15000); 

console.log('Позиций:', cart.count, 'Сумма:', cart.total);
cart.changeQty('Мышь', 3);
cart.remove('Коврик');
console.log('После изменений — позиций:', cart.count, 'Сумма:', cart.total);
