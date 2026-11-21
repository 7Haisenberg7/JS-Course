const cards = document.querySelectorAll('.project-card'); 
cards.forEach((card, index) => {
  card.dataset.index = index;
});
const titles = document.querySelectorAll('.project-card h3');
titles.forEach((title) => {
  title.classList.add('highlight-title');
});
if (cards.length > 0) {
  cards[cards.length - 1].remove();
}
const btn = [...document.querySelectorAll('a, button')]
  .find((el) => el.textContent.trim() === 'Work With Us');
let node = btn;
const path = [];
while (node && node !== document.body) {
  path.push(node.tagName.toLowerCase());
  node = node.parentElement;
}
console.log('Путь до body:', path.join(' → '));
