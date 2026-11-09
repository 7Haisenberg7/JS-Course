const originals = {name:'Мышь', price: 790, dims:{width:6}};
const sameRef=originals;
sameRef.price=690;
console.log('original price:', originals.price, 'Одна ссылка?', originals === sameRef);

const copy1 = {...originals};
const copy2= Object.assign({}, originals);
copy1.price=500;
copy1.dims.width=99;
console.log('original:', originals.price, originals.dims.width);
console.log('copy2.dims === originals.dims?', copy2.dims === originals.dims);

const deep=structuredClone(originals);
deep.dims.width = 1;
console.log('origianls.dims.width:', originals.dims.width, 'deep.dims.width:',
deep.dims.width);

const a = {name: 'Мышь', price:790};
const b = {name: 'Мышь', price:790};
console.log('a === b:', a === b);
console.log('a === a:', a === a);

function shallowEqual(x,y){
    const kx = Object.keys(x), ky=Object.keys(y);
    if(kx.length !==ky.length)return false;
    for(const k of kx ) if (x[k]) return false;
    return true;
}
console.log('shallowEqual(a, b):', shallowEqual(a, b));