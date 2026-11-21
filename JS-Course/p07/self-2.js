
const items = [
  ...products, 
  { id: 21, name: '<img src=x onerror=alert("XSS_атака!")>', price: 999 }
];


const safeList = document.getElementById('list-safe');
const fragment = document.createDocumentFragment();

for (const p of items) {
  const li = document.createElement('li');
  li.className = 'product';
  li.dataset.id = p.id;
  li.textContent = `${p.name} `; 

  const span = document.createElement('span');
  span.className = 'price';
  span.textContent = `${p.price} ₽`;
  
  li.append(span);
  fragment.append(li);
}
safeList.append(fragment);


const unsafeList = document.getElementById('list-unsafe');
unsafeList.innerHTML = items.map((p) => 
  `<li class="product" data-id="${p.id}">${p.name} <span class="price">${p.price} ₽</span></li>`
).join('');
