const sampleProducts = typeof products !== 'undefined' ? products : [
    { name: 'Клавиатура', price: 1250, oldPrice: 1490, stock: 5 },
    { name: 'Мышь', price: 790, oldPrice: null, stock: 0 },
    { name: 'Наушники <b>Pro</b>', price: 2990, oldPrice: 3490, stock: 7 },
];

function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

function renderCard(product) {
    return `
        <div class="card">
            <h3>${escapeHtml(product.name)}</h3>
            <span class="price">${escapeHtml(product.price)} ₽</span>
            ${product.oldPrice ? `<span class="old">${escapeHtml(product.oldPrice)} ₽</span>` : ''}
            ${product.stock === 0 ? '<div class="badge">Нет в наличии</div>' : ''}
        </div>`;
}

function renderList(items) {
    return items.map(renderCard).join('');
}

document.getElementById('catalog').innerHTML = renderList(sampleProducts);
