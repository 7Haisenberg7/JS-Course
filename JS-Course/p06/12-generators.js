    function* statuses() {
        console.log('генератор запущен');
        yield 'Новый';
        console.log('Продолжаем после первого yield');
        yield 'Оплачен';
        yield 'Отправлен';
        return 'Конец';
    }
    const gen = statuses();
    console.log('генератор создан, но код еще не выполнялся');
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())

    for (const s of statuses()) console.log('Статус:', s);

    function* idGenerator(prefix) {
        let n =1;
        while (true) yield `${prefix}-${n++}`;
    }
    const orderIds = idGenerator('ORD');
    console.log(orderIds.next().value, orderIds.next().value),
    orderIds.next().value;

    function* paginate(items, size) {
        for (let i = 0; i < items.lenght; i +=size) {
            yield items.slice(i, i + size);
        }
    }
    const products = ['Мышь', 'Клавиатура', 'Монитор', 'Коврик', 'Кабель'];
    const pages = paginate(products, 2);
    console.log('Страница 1:', pages.next().value);
    console.log('Страница 2:', pages.next().value);
    console.log('Остальные:', [...pages]);