"use strict";

class Person {
  constructor() {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Desconhecido";
    let age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.name = name;
    this.age = age;
  }

  cumprimentar() {
    return "Ol\xE1! Eu me chamo ".concat(this.name, ". Prazer em conhecer voc\xEA!");
  }

  descricao() {
    return "Sou ".concat(this.name, " e tenho ").concat(this.age, " ano(s) de idade!");
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

    if (this.hasMajor()) {
      description += " Meu curso \xE9 ".concat(this.major, ".");
    }

    return description;
  }

}

;

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

    if (this.hasHomeLocation()) {
      cumprimento += " Eu sou de ".concat(this.homeLocation, ".");
    }

    return cumprimento;
  }

}

const me = new Traveler("Pedro Soares", 22, "Salvador");
console.log(me.cumprimentar());
const other = new Traveler();
console.log(other.cumprimentar());