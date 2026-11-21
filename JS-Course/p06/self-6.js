    const cart = {
    items: [
        { name: 'Мышь', price: 790, qty: 2 },
        { name: 'Коврик', price: 350, qty: 1 },
    ],
    [Symbol.iterator]() {
        let index = 0;
        const items = this.items;
        return {
            next() {
                if (index < items.length) {
                    const item = items[index++];
                    return { value: `${item.name} x${item.qty} = ${item.price * item.qty}`, done: false };
                }
                return { value: undefined, done: true };
            },
        };
    },
};

for (const line of cart) {
    console.log(line);
}

function* paginate(items, size) {
    for (let i = 0; i < items.length; i += size) {
        yield items.slice(i, i + size);
    }
}

const products = ['Мышь', 'Клавиатура', 'Монитор', 'Коврик', 'Кабель'];
const pages = paginate(products, 2);
console.log('Страница 1:', pages.next().value);
console.log('Страница 2:', pages.next().value);
console.log('Остальные:', [...pages]);
