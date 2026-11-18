    const re1 = /мышь/;
    const re2 = new RegExp('Мышь');
    console.log(re1.test('Беспроводная мышь'), re2.test('Клавиатура'));
    console.log(/мышь/.test('Беспроводная мышь'), /мышь/i.test('Беспроводная мышь'))

    const query = 'Мышь'; 
    const dynamic = new RegExp(query, 'gi');
    console.log(dynamic.source, dynamic.flags);
    console.log(dynamic.test('Мышь'), dynamic.lastIndex);
    console.log(dynamic.test('Мышь'), dynamic.lastIndex);
    console.log(dynamic.test('Мышь'), dynamic.lastIndex);