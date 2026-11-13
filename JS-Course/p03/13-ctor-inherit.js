function DigitalProduct(name, price, sizeMb) {
    Product.call(this, name, price);   // 1. свойства родителя
    this.sizeMb = sizeMb;
}
 
// 2. цепочка прототипов
DigitalProduct.prototype = Object.create(Product.prototype);
DigitalProduct.prototype.constructor = DigitalProduct;
 
// 3. переопределение и вызов метода родителя
DigitalProduct.prototype.shippingCost = function () { return 0; };
DigitalProduct.prototype.describe = function () {
    return Product.prototype.describe.call(this) + ` (${this.sizeMb} МБ)`;
};
 
const ebook = new DigitalProduct('Книга', 450, 12);
console.log(ebook);
console.log(ebook.describe(), '| доставка:', ebook.shippingCost());
console.log(ebook instanceof DigitalProduct, ebook instanceof Product);
const order=  [new Product('Клавиатура', 1250), ebook, new Product('Мышь', 790)];
let shipping = 0;
for (const item of order) shipping +=item.shippingCost();
console.log('Доставка заказа:', shipping);