    'use strict';

function deepFreeze(obj) {
    for (const value of Object.values(obj)) {
        if (typeof value === 'object' && value !== null) {
            deepFreeze(value);
        }
    }
    return Object.freeze(obj);
}

function addToCart(state, item) {
    return deepFreeze({
        ...state,
        cart: [...state.cart, item],
    });
}

const state1 = deepFreeze({ cart: [], filters: {} });
const state2 = addToCart(state1, { name: 'Мышь', price: 790 });

console.log('Старое состояние:', state1.cart);
console.log('Новое состояние:', state2.cart);
console.log('Ссылки разные?', state1 !== state2);
console.log('Новое заморожено?', Object.isFrozen(state2), Object.isFrozen(state2.cart));
