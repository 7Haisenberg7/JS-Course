    function render(state) {
    const app = document.getElementById('app');
    app.innerHTML = `<h2>Корзина</h2><p>Товаров: ${state.items.length}, ` +
        `сумма: ${state.items.reduce((s, i) => s + i.price, 0)} ₽</p>`;
    console.log('render: товаров', state.items.length);
}

function reactive(initial, onChange) {
    return new Proxy(initial, {
        set(target, key, value) {
            target[key] = value;
            onChange(target);
            return true;
        },
    });
}

const state = reactive({ items: [] }, render);
render(state);

state.items = [...state.items, { name: 'Мышь', price: 790 }];
state.items = [...state.items, { name: 'Коврик', price: 350 }];
