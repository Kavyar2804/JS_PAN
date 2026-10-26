


let car1 = {

    brandname: "maruthi 800",
    colour: ['white', 'red', 'pink', 'black'],
    YOM: 1990,
    price: 50000

}

console.log(car1.colour[2]);

let car2 = Object.create(car1)

console.log(car2);

car2.brandname="BMW"
car2.price=6000000


console.log(car2.brandname);

