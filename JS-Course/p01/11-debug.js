const cartPrices= ['1250', '790', '430'];

function cartTotal(items){
    let total=0;
    for(let i = 0; i < items.length; i++){
        total=total+items[i];
    }
    return total;
}
console.log('итого:', cartTotal(cartPrices));
console.warn('Товар заканчивается: осталось 2шт.');
console.error('Не удалось загрузить отзывы');