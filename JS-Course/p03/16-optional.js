const order  ={
    id : 17,
    customer: {name: 'Анна', contacts : {email : 'anna@gmail.com'}},
};
const draft = {id : 18};

console.log(order.customer?.contacts?.email);
console.log(draft.customer?.contacts?.email);
console.log(draft.customer?.contacts?.email ?? 'Почта не указана');

    const shop = { log (msg) {console.log('LOG:', msg);}};
    const silentShop= {};
    shop.log?.('Заказ создан');
    silentShop.log?.('Не выведется');
    const reviews = null;
    console.log('Первый отзыв:', reviews?.[0]?.author)

