class Product {
    static CURRENCY  = '₽';
    static #nextID = 1;
}
    constructor(name , price){
        this.id  = Product.#nextID++;
        this.name = name;
        this.price= price;
    }
    describe(){
        return `#${this.id} ${this.name}: ${this.price} ${Product.CURRENCY}`;
    }
    const a = new Product('Клавиатура' , 1250);
    const b = new Product('Мышь', 790);
    console.log(a.describe());
    console.log(b.describe());
    console.log(Product.CURRENCY, a.CURRENCY);
     static fromJSON(json){
        const data = JSON.parse(json);
        return new Product(data.namem, data.price);
     }
     to JSON(){
        return {name : this.name , price : this.price};
     }
     const json = JSON.stringify(a);
     console.log(json);
     const restored = Product.fromJSON(jsol );
     console.log(restored.describe(), restored instanceof Product);
     console.log(typeof a.fromJSON);