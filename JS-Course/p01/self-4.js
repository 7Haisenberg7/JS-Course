function statusSwitch(code) {
    switch (code) {
        case 0: return 'Новый';
        case 1: return 'Оплачен';
        case 2: return 'В сборке';
        case 3: return 'Отправлен';
        case 4: return 'Доставлен';
        default: return 'Неизвестный статус';
    }
}
function statusTernary(code) {
    return code === 0 ? 'Новый'
        : code === 1 ? 'Оплачен'
        : code === 2 ? 'В сборке'
        : code === 3 ? 'Отправлен'
        : code === 4 ? 'Доставлен'
        : 'Неизвестный статус';
}
function statusDict(code) {
    const statuses = {
        0: 'Новый',
        1: 'Оплачен',
        2: 'В сборке',
        3: 'Отправлен',
        4: 'Доставлен',
    };
    return statuses[code] ?? 'Неизвестный статус';
}
console.log(statusSwitch(1), '|', statusTernary(3), '|', statusDict(9));
