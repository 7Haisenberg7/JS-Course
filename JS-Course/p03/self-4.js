    function diff(objA, objB) {
    const changed = [];
    for (const [key, value] of Object.entries(objB)) {
        if (objA[key] !== value) {
            changed.push(key);
        }
    }
    for (const key of Object.keys(objA)) {
        if (!(key in objB)) {
            changed.push(key);
        }
    }
    return changed;
}
const before = { name: 'Мышь', price: 790, discount: 10 };
const after = { name: 'Мышь', price: 690, stock: 5 }; 
console.log('Отличия:', diff(before, after)); 