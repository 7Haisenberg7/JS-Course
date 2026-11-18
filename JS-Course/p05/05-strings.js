    const name = 'Клавиатура';
    console.log(name.length , name[1], name.at(-1));
    const changed = name;
    name[0] = 'k';
    console.log(name)
    console.log(name.toUpperCase(), name);
    console.log(name[0].toUpperCase()+ name.slice(1));
    
    const title ='Беспроводная мышь Logitech M185';
    const clean = title.trim();
    console.log(`[${clean}]`);
    console.log(clean.includes('Мышь'), clean.startsWith('Бес'),
    clean.endsWith('185'));
    console.log(clean.indexOf('Мышь'), clean.indexOf('Клавиатура'));
    console.log(clean.slice(13, 17), clean.slice(-4));

    const cvs = 'Мышь;790;Электроника';
    const parts = cvs.split(';');
    console.log(parts);
    console.log(parts.join(' | '));
    console.log('ab'.repeat(3), '7'.padStart(3, '0'), 'да-да-да'.replaceAll('Да', 'нет'));
    console.log('еж' < 'Яблоко', 'Яблоко'.localeCompare('Еж', 'ru'))
