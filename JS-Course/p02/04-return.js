function witVat(price,rate=20){
    return price + price * rate / 100;
}
const a = witVat(1000);
const b = witVat(500) + witVat(250);
console.log(a, b
)

function logPrice(price){
    console.log('Цена:', price);
}
const result=logPrice(100);
console.log('Результат:', result);

function FormatPrice(value){
    if(typeof value !== 'number' || Number.isNaN(value)){
        return 'Цена не указана';
    }
    return value.toFixed(2).replace('.',',') + '₽';
    console.log('Эта строчка никогда не выполнится');
}
    console.log(FormatPrice(1250.5));
    console.log(FormatPrice('abc'));

    function calcCart(prices){
        let total = 0;
        for(const p of prices) total +=p;
        return {total, count:prices.length, average : total / prices.length};
    }
    const stats = calcCart([1250,790,300]);
    console.log(stats);
    console.log('Средне', stats.average);