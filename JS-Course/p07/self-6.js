
let state = {
  products: [
    { id: 1, name: 'Клавиатура', price: 1250 },
    { id: 2, name: 'Мышь', price: 790 },
    { id: 3, name: 'Коврик', price: 430 },
  ],
  cart: {},
  search: '',
  sortOrder: 'none', 
};

const cards = new Map();
let created = 0, updated = 0;

function createCard(p) {
  const li = document.createElement('li');
  li.className = 'product';
  li.dataset.id = p.id;
  li.innerHTML = `<span class="name"></span> 
    <button class="minus">−</button> <b class="qty"></b> <button class="plus">+</button> 
    <button class="del">Удалить</button>`;
  li.querySelector('.name').textContent = `${p.name} ${p.price} ₽`;
  created++;
  return li;
}

function updateCard(li, qty) {
  const qtyEl = li.querySelector('.qty');
  if (qtyEl.textContent !== String(qty)) {
    qtyEl.textContent = qty;
    li.querySelector('.minus').disabled = qty === 0;
    li.querySelector('.del').disabled = qty === 0;
    updated++;
  }
}

function render(s) {
  const list = document.getElementById('list');
  

  let visible = s.products.filter((p) =>
    p.name.toLowerCase().includes(s.search.toLowerCase())
  );

 
  if (s.sortOrder === 'asc') visible = [...visible].sort((a, b) => a.price - b.price);
  if (s.sortOrder === 'desc') visible = [...visible].sort((a, b) => b.price - a.price);

  const visibleIds = new Set(visible.map((p) => p.id));


  for (const [id, li] of cards) {
    if (!visibleIds.has(id)) {
      li.remove();
      cards.delete(id);
    }
  }

  
  visible.forEach((p, index) => {
    let li = cards.get(p.id);
    if (!li) {
      li = createCard(p);
      cards.set(p.id, li);
    }
    updateCard(li, s.cart[p.id] ?? 0);
  
    if (list.children[index] !== li) {
      list.insertBefore(li, list.children[index] ?? null);
    }
  });

  const count = Object.values(s.cart).reduce((a, b) => a + b, 0);
  const total = s.products.reduce((sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0);
  document.getElementById('count').textContent = count;
  document.getElementById('total').textContent = total;
  console.log(`render: создано ${created}, обновлено ${updated}`);
}

function setState(patch) {
  state = { ...state, ...patch };
  render(state);
}

document.getElementById('list').addEventListener('click', (e) => {
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

document.getElementById('search').addEventListener('input', (e) => setState({ search: e.target.value }));
document.getElementById('sort').addEventListener('click', () => {
  const nextOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
  setState({ sortOrder: nextOrder });
});

render(state);
