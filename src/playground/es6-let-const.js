

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(1,3));

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

const user = {
    name: "Pedro",
    cities: ["Salvador", "Bahia", "Território africano"],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived on ${city}`)
        }
    };

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5 , 42],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((x)=> x*this.multiplyBy);
    }
};

console.log(multiplier.multiply());