    const original = {
    name: 'Мышь',
    price: 790,
    dimensions: { width: 6, height: 4 },
};
const copy1 = { ...original };
copy1.dimensions.width = 10;
console.log('После copy1 (spread), оригинал:', original.dimensions.width); 
const copy2 = Object.assign({}, original);
copy2.dimensions.width = 20;
console.log('После copy2 (assign), оригинал:', original.dimensions.width);
const copy3 = structuredClone(original);
copy3.dimensions.width = 99;
console.log('После copy3 (structuredClone), оригинал:', original.dimensions.width);
console.log('В самой copy3:', copy3.dimensions.width);
