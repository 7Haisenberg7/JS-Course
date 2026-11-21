    import { ValidationError, OutOfStockError } from './errors.js';

const stock = { 42: 3, 7: 10 };
const attemptLog = [];

function addItem(productId, qty) {
    if (!Number.isInteger(qty) || qty < 1) {
        throw new ValidationError('qty', 'Количество должно быть целым и больше нуля');
    }
    if (qty > stock[productId]) {
        throw new OutOfStockError(productId, stock[productId]);
    }
    return `Добавлено: товар ${productId} x ${qty}`;
}

for (const [id, qty] of [[7, 2], [42, 5], [7, -1]]) {
    let status = 'успех';
    try {
        console.log(addItem(id, qty));
    } catch (e) {
        status = e.name;
        if (e instanceof ValidationError) {
            console.log('Поле', e.field + ':', e.message);
        } else if (e instanceof OutOfStockError) {
            console.log('Предложим', e.available, 'шт. вместо запрошенных');
        } else {
            throw e;
        }
    } finally {
        attemptLog.push({ productId: id, qty, status });
    }
}

console.log('Лог попыток:', attemptLog);
