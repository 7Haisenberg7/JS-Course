    const cart = new Map();

function add(productId, qty = 1) {
    cart.set(productId, (cart.get(productId) ?? 0) + qty);
}

add(101);
add(205, 2);
add(101);

for (const [id, qty] of cart) {
    console.log(`Товар ${id}: ${qty} шт.`);
}

const catalog = [
    { name: 'Мышь', tags: ['usb', 'wireless'] },
    { name: 'Клавиатура', tags: ['usb', 'rgb'] },
    { name: 'Наушники', tags: ['wireless', 'bluetooth'] },
];

const allTags = new Set();
for (const p of catalog) {
    for (const t of p.tags) allTags.add(t);
}
console.log('Уникальные теги:', [...allTags]);
