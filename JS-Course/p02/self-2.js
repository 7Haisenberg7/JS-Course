    // 1. Function Declaration — сработает (выведет 15)
console.log(sum(5, 10));
function sum(a, b) {
    return a + b;
}

// 2. Функциональное выражение через var — выдаст TypeError: mult is not a function
// console.log(mult(5, 10));
var mult = function (a, b) {
    return a * b;
};

// 3. Стрелочная функция через let — выдаст ReferenceError (временная мёртвая зона)
// console.log(sub(10, 5));
let sub = (a, b) => a - b;
