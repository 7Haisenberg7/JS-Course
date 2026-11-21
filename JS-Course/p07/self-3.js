
const products = [
  { id: 1, name: 'Клавиатура', price: 1250 },
  { id: 2, name: 'Мышь', price: 790 },
  { id: 3, name: 'Коврик', price: 430 },
];
const cart = new Map();
const list = document.getElementById('list');


for (const p of products) {
  const li = document.createElement('li');
  li.className = 'product';
  li.dataset.id = p.id;
  li.innerHTML = `${p.name} <span class="price">${p.price} ₽</span>
    <button class="minus" disabled>−</button>
    <b class="qty">0</b>
    <button class="plus">+</button>
    <button class="del">Удалить</button>`;
  list.append(li);
}


function updateTotals() {
  let count = 0;
  let total = 0;
  for (const [pid, q] of cart) {
    count += q;
    total += products.find((p) => p.id === pid).price * q;
  }
  document.getElementById('count').textContent = count; 
  document.getElementById('total').textContent = total; 
}

list.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  const id = Number(li.dataset.id);
  const current = cart.get(id) ?? 0;

  if (e.target.matches('.plus')) {
    const next = current + 1;
    cart.set(id, next);
    li.querySelector('.qty').textContent = next;     
    li.querySelector('.minus').disabled = false;     
    updateTotals();
  }

  if (e.target.matches('.minus') && current > 0) {
    const next = current - 1;
    if (next === 0) cart.delete(id);
    else cart.set(id, next);
    li.querySelector('.qty').textContent = next;       
    li.querySelector('.minus').disabled = next === 0;  
    updateTotals();
  }

  if (e.target.matches('.del')) {
    cart.delete(id);
    li.querySelector('.qty').textContent = 0;         
    li.querySelector('.minus').disabled = true;       
    updateTotals();
  }
});

document.getElementById('clear').addEventListener('click', () => {
  cart.clear();
  document.querySelectorAll('.qty').forEach((el) => (el.textContent = 0));       
  document.querySelectorAll('.minus').forEach((btn) => (btn.disabled = true));   
  updateTotals();
});
