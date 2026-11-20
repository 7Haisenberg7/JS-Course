    const priceKop = 125050; // 1250,50 ₽
    const discountPercent = 15;

    const discountedKop = Math.round(priceKop * (100 - discountPercent) / 100);
    const totalKop = discountedKop * 3;

    console.log('Цена со скидкой:', (discountedKop / 100).toFixed(2), '₽');
    console.log('Итого за 3 шт.:', (totalKop / 100).toFixed(2), '₽');
