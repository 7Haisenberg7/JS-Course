    function renderLine({ name, price, dimensions: { width = 0 } = {} }) {
    return `${name}: ${price} ₽, ширина ${width} см`;
}

const fullProduct = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: { width: 44 },
    supplier: { contact: { email: 'info@shop.ru' } },
};

const shortProduct = {
    name: 'Кабель',
    price: 300,
};

console.log(renderLine(fullProduct));
console.log(renderLine(shortProduct));

console.log('Email 1:', fullProduct?.supplier?.contact?.email ?? 'почта не указана');
console.log('Email 2:', shortProduct?.supplier?.contact?.email ?? 'почта не указана');
