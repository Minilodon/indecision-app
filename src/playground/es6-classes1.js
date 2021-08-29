class Person {
    constructor(name = "Desconhecido", age = 0) {
        this.name = name;
        this.age = age;
    }
    cumprimentar() {
        return `Olá! Eu me chamo ${this.name}. Prazer em conhecer você!`;
    }
    descricao() {
        return `Sou ${this.name} e tenho ${this.age} ano(s) de idade!`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    descricao() {
        let description = super.descricao();

        if(this.hasMajor()) {
            description += ` Meu curso é ${this.major}.`
        }

        return description;
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    cumprimentar() {
        let cumprimento = super.cumprimentar();

        if(this.hasHomeLocation()) {
            cumprimento += ` Eu sou de ${this.homeLocation}.`;
        }

        return cumprimento;
    }
}

const me = new Traveler("Pedro Soares", 22, "Salvador");
console.log(me.cumprimentar());

const other = new Traveler();
console.log(other.cumprimentar());