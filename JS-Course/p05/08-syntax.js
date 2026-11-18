    const text = 'Заказ А-17: 3шт. по 790 рублей., итого 2370 руб.';
    console.log(text.match(/\d/g).join(''));
    console.log(text.match(/\d+/g));
    console.log(text.match(/[А-ЯЁA-Z]/g));
    console.log(text.match(/[^d/s.,:]+/g));

    const article = /^[A-Z]{2}-\d{5}$/;
    console.log(article.test('AB-12345'));
    console.log(article.test('Артикул AB-12345'));
    console.log(/[A-Z]{2}-\d{5}/.test('Артикул AB-12345'));

    console.log(/1.5/.test('105'), /1\.5/.test('105'), /1\.5/.test('1.5'));
    console.log('cat concat'.match(/\bcat\b/g));
    console.log('Кот-скот'.match(/\bкот\b/g));