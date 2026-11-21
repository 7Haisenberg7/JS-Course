    function addBusinessDays(date, count) {
    const result = new Date(date);
    while (count > 0) {
        result.setDate(result.getDate() + 1);
        const day = result.getDay();
        if (day !== 0 && day !== 6) count--;
    }
    return result;
}

const orderDate = new Date(2026, 8, 4); // 4 сентября 2026 (пятница)
const deliveryDate = addBusinessDays(orderDate, 3);

console.log('Дата заказа:', orderDate.toLocaleDateString('ru-RU'));
console.log('Дата доставки:', deliveryDate.toLocaleDateString('ru-RU'));

const lastDayOfMonth = new Date(orderDate.getFullYear(), orderDate.getMonth() + 1, 0);
const daysLeft = lastDayOfMonth.getDate() - orderDate.getDate();
console.log('Дней до конца месяца:', daysLeft);
