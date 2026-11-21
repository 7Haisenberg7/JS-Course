
let state = {
  products: [
    { id: 1, name: 'Клавиатура', price: 1250 },
    { id: 2, name: 'Мышь', price: 790 },
    { id: 3, name: 'Коврик', price: 430 },
  ],
  cart: {},
  search: '',
};

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  node.append(...children);
  return node;
}

function render(s) {
  const visible = s.products.filter((p) =>
    p.name.toLowerCase().includes(s.search.toLowerCase())
  );
  const count = Object.values(s.cart).reduce((a, b) => a + b, 0);
  const total = s.products.reduce((sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0);

  document.getElementById('app').replaceChildren(
    el('header', { className: 'header' },
      el('input', { id: 'search', value: s.search, placeholder: 'Поиск' }),
      el('div', {},
        el('span', { className: 'logo' }, `Корзина: ${count} `),
        el('button', { id: 'clear', disabled: count === 0 }, 'Очистить')
      )
    ),
    el('main', {},
      el('ul', { className: 'products' }, ...visible.map((p) =>
        el('li', { className: 'product' }, `${p.name} `,
          el('span', { className: 'price' }, `${p.price} ₽ `),
          el('button', { className: 'minus', disabled: !s.cart[p.id] }, '−'),
          ` ${s.cart[p.id] ?? 0} `,
          el('button', { className: 'plus' }, '+'),
          ' ',
          el('button', { className: 'del', disabled: !s.cart[p.id] }, 'Удалить')
        )
      )),
      el('p', {}, `Итого: ${total} ₽`)
    )
  );
  document.querySelectorAll('.product').forEach((li, i) => (li.dataset.id = visible[i].id));
}

function setState(patch) {
  state = { ...state, ...patch };
  render(state);
}

const app = document.getElementById('app');
app.addEventListener('click', (e) => {
  if (e.target.id === 'clear') {
    setState({ cart: {} });
    return;
  }
  const li = e.target.closest('li');
  if (!li) return;
  const id = Number(li.dataset.id);
  const qty = state.cart[id] ?? 0;

  if (e.target.matches('.plus')) setState({ cart: { ...state.cart, [id]: qty + 1 } });
  if (e.target.matches('.minus')) setState({ cart: { ...state.cart, [id]: qty - 1 } });
  if (e.target.matches('.del')) {
    const nextCart = { ...state.cart };
    delete nextCart[id];
    setState({ cart: nextCart });
  }
});

app.addEventListener('input', (e) => {
  if (e.target.id === 'search') setState({ search: e.target.value });
});

render(state);
