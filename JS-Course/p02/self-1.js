
function applyDiscount(price, percent = 0) {
    return price - price * percent / 100;
}
const withVat = function (price, rate = 20) {
    return price + price * rate / 100;
};


const formatPrice = (value) => {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        return 'цена не указана';
    }
    return value.toFixed(2).replace('.', ',') + ' ₽';
};

console.log(applyDiscount(1000, 15));
console.log(withVat(1000));
console.log(formatPrice(1250.5));

// Function Declaration удобно использовать для главных функций, которые можно вызывать в любом месте файла.
// Function Expression удобно, когда функцию нужно положить в переменную или переопределить (через let).
// Стрелочные функции лучше всего подходят для коротких вычислений и функций обратного вызова (callback).
