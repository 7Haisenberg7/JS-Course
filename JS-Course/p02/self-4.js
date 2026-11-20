    function createCart() {
    let items = [];

    return {
        add(item) {
            items.push(item);
        },
        remove(name) {
            const newItems = [];
            for (const it of items) {
                if (it.name !== name) {
                    newItems.push(it);
                }
            }
            items = newItems;
        },
        total() {
            let sum = 0;
            for (const it of items) {
                sum += it.price;
            }
            return sum;
        },
        items() {
            return [...items]; 
        }
    };
}

const cart = createCart();
cart.add({ name: 'Клавиатура', price: 1250 });
cart.add({ name: 'Мышь', price: 790 });


const externalList = cart.items();
externalList.push({ name: 'Взлом', price: 0 });

console.log('Внутри корзины осталось товаров:', cart.items().length);
cart.remove('Мышь');
console.log('После удаления Мыши, сумма:', cart.total()); // 1250
