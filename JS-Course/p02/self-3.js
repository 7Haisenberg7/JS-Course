    function createIdGenerator(prefix) {
    let n = 0;
    return {
        next() {
            n++;
            return `${prefix}-${n}`;
        },
        reset() {
            n = 0;
        }
    };
}

const orderId = createIdGenerator('ORD');
const userId = createIdGenerator('USR');

console.log(orderId.next(), orderId.next()); 
console.log(userId.next());                   

orderId.reset();
console.log(orderId.next());                   
console.log(userId.next());                 
