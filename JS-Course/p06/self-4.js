    console.log('Обычный toFixed(2) для 1.005:', (1.005).toFixed(2));

function toKopecks(rubles) {
    return Math.round(Number((rubles * 100).toPrecision(15)));
}

function roundMoney(value) {
    const kopecks = toKopecks(value);
    return (kopecks / 100).toFixed(2);
}

console.log('В копейках:', toKopecks(1.005));
console.log('Корректное округление:', roundMoney(1.005) + ' ₽');
