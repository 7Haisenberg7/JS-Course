class ProductList extends Array {
    byCategory(name) {
        return this.filter((p) => p.category === name);
    }

    totalPrice() {
        return this.reduce((sum, p) => sum + p.price, 0);
    }

    cheapest() {
        if (this.length === 0) return undefined;
        return this.toSorted((a, b) => a.price - b.price)[0];
    }
}

const list = ProductList.from([
    { name: 'Клавиатура', category: 'Электроника', price: 1250 },
    { name: 'Ручка', category: 'Канцелярия', price: 60 },
    { name: 'Мышь', category: 'Электроника', price: 790 },
]);

const electronics = list.byCategory('Электроника');
console.log('Электроника:', electronics);
console.log('Сумма электроники:', electronics.totalPrice());
console.log('Самый дешёвый товар:', list.cheapest());
console.log('filter вернул ProductList?', electronics instanceof ProductList); // true
