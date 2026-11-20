    function parsePrice(text) {
    const cleaned = text.replace(/[^\d,.-]/g, '').replace(',', '.');
    if (cleaned === '') return NaN;
    const priceValue = Number(cleaned);
    return Number.isNaN(priceValue) ? NaN : priceValue;
}
    console.log(parsePrice('1 250,50 ₽'));
    console.log(parsePrice('990₽'));
    console.log(parsePrice('abc'));
