    const prices =;

let sum = 0;
let max = prices;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (prices[i] > max) max = prices[i];
}

const avg = sum / prices.length;
console.log('Сумма:', sum, 'Максимум:', max, 'Среднее:', avg);

for (const price of prices) {
    if (price > avg) console.log('Дороже среднего:', price);
}

let firstIndex = -1;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 1000) {
        firstIndex = i;
        break;
    }
}
console.log('Индекс первой цены выше 1000:', firstIndex);
