const applyDiscount = (price, percent) => {
    const discount = price * percent / 100;
    return price - discount;
};
const double = (x) => x * 2;
const now = () => new Date().getFullYear();
console.log(applyDiscount(1000, 10), double(21), now());

const makeItemWrong = (name)=> {name: name};
const MakeItem = (name) => ({name : name });
console.log(makeItemWrong('Мышь'));
console.log(MakeItem('Мышь'));

function classic(){
    console.log('arguments.length=', arguments.length);
}
classic(1,2,3);
const arrow = (...args) => console.log(args.length);
arrow(1,2,3)

function forEachPrice(prices, callback) {
    for (const p of prices) callback(p);
}
forEachPrice([1250, 790], (p) => console.log('цена с НДС:', p * 1.2));




