    function isEqualCart(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i].id !== b[i].id || a[i].qty !== b[i].qty) {
            return false;
        }
    }
    return true;
}
const cart1 = [{ id: 1, qty: 2 }, { id: 2, qty: 1 }];
const cart2 = [{ id: 1, qty: 2 }, { id: 2, qty: 1 }];
const cart3 = [{ id: 2, qty: 1 }, { id: 1, qty: 2 }]; 
console.log('cart1 и cart2 равны по ссылке?', cart1 === cart2);          
console.log('cart1 и cart2 равны по содержимому?', isEqualCart(cart1, cart2)); 
console.log('cart1 и cart3 (разный порядок):', isEqualCart(cart1, cart3));     
