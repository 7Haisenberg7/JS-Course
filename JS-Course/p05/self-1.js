const catalog = typeof products !== 'undefined' ? products : [
    { id: 1, name: 'Клавиатура', category: 'Электроника', price: 1250, stock: 5 },
    { id: 2, name: 'Мышь', category: 'Электроника', price: 790, stock: 0 },
    { id: 3, name: 'Монитор', category: 'Электроника', price: 15990, stock: 2 },
    { id: 4, name: 'Блокнот', category: 'Канцелярия', price: 150, stock: 40 },
    { id: 5, name: 'Ручка', category: 'Канцелярия', price: 60, stock: 100 },
    { id: 6, name: 'Наушники', category: 'Электроника', price: 2990, stock: 7 },
];
const expensiveElectronics = catalog
    .filter((p) => p.category === 'Электроника' && p.price > 1000)
    .toSorted((a, b) => b.price - a.price)
    .map((p) => p.name);

console.log('Дорогая электроника:', expensiveElectronics);
const stockValue = catalog.reduce((sum, p) => sum + p.price * p.stock, 0);
console.log('Стоимость склада:', stockValue);
const byCategory = catalog.reduce((groups, p) => {
    groups[p.category] = groups[p.category] || [];
    groups[p.category].push(p.name);
    return groups;
}, {});

console.log('По категориям:', byCategory);
