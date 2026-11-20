    const CartModule = (function () {
    let items = [];

    return {
        add(item) {
            items.push(item);
        },
        remove(name) {
            const newItems = [];
            for (const it of items) {
                if (it.name !== name) newItems.push(it);
            }
            items = newItems;
        },
        total() {
            let sum = 0;
            for (const it of items) sum += it.price;
            return sum;
        },
        items() {
            return [...items];
        }
    };
})();

CartModule.add({ name: 'Клавиатура', price: 1250 });
console.log('Сумма в модуле:', CartModule.total());
console.log('Доступ к массиву напрямую:', CartModule.items); 
