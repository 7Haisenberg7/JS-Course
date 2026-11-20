const sampleProducts = typeof products !== 'undefined' ? products : [
    { name: 'Клавиатура', price: 1250 },
    { name: 'Мышь', price: 790 },
    { name: 'Коврик <script>alert(1)</script>', price: 450 },
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
        </div>`;
}

function renderList(items) {
    return items.map(renderCard).join('');
}

document.getElementById('catalog').innerHTML = renderList(sampleProducts);
