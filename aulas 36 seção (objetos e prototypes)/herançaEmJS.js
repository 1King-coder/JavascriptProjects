function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.increase = function(amount) {
    this.price += amount;
};

Product.prototype.decrease = function(amount) {
    this.price -= amount;
};

function Tshirt(name, price, color) {
    Product.call(this, name, price);

    this.color = color;
};
Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;

function Mug(name, price, material) {
    Product.call(this, name, price);

    this.material = material;
};
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const mug = new Mug('Tea-mug', 102, 'Basalt');
const tShirt = new Tshirt('Polo', 249.90, 'Black and white');

tShirt.increase(90.10);
console.log(tShirt);
tShirt.decrease(30);
console.log(tShirt);

mug.increase(90.10);
console.log(mug);
mug.decrease(30);
console.log(mug);