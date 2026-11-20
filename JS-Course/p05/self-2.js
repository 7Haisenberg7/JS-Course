// Изменяющие (мутирующие) методы
const a1 =;
a1.push(3);
console.log('push изменил исходный:', a1); // [1, 2, 3]

const a2 =;
a2.sort((a, b) => a - b);
console.log('sort изменил исходный:', a2); // [1, 2, 3]

const a3 = ['a', 'b', 'c'];
a3.splice(1, 1);
console.log('splice изменил исходный:', a3); // ['a', 'c']

// Неизменяющие методы
const b1 =;
const mapped = b1.map((x) => x * 2);
console.log('map не изменил:', b1, 'новый:', mapped);

const filtered = b1.filter((x) => x > 1);
console.log('filter не изменил:', b1, 'новый:', filtered);

const sliced = b1.slice(0, 2);
console.log('slice не изменил:', b1, 'новый:', sliced);

const concated = b1.concat([4, 5]);
console.log('concat не изменил:', b1, 'новый:', concated);

const b2 =;
const sorted = b2.toSorted((a, b) => a - b);
console.log('toSorted не изменил:', b2, 'новый:', sorted);
