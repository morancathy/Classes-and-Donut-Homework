//Classes & Donut Adventure -Homework W4 Day 1

class Hamster {
  constructor(name){
    this.owner = ' ';   //dont put this in constructor because it is not dynamic
    this.name = name;  //this in constructor beacuse acceptiong arguement for it
    this.price = 15;
  }
  wheelRun(){
    console.log("squeak squeak");
  }
  eatFood(){
    console.log("nibble nibble");
  }
  getPrice(){
    return this.price;
  }
}
const Gus = new Hamster('Gus');

class Person {
  constructor(){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getWeight(){
    return this.weight;
  }
  greet(){
    console.log("Hello" + this.name + "!");
  }
  eat(num){
    this.weight += num;
    this.mood += num;
  }
  exercise(num){
    this.weight -= num
  }
  ageUp(num){
    this.age += num;
    this.height += num;
    this.weight += num;
    this.mood -= num;
    this.bankAccount += 10;
  }
  buyHamster(hamster){
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
    }
}
const Cathy = new Person;
