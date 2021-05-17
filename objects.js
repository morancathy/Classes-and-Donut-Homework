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
Gus.owner = "Timmy";

class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name;
  }
  getAge(){
    console.log(this.age);
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
    this.bankAccount += num * 10;
    console.log(this.mood);
  }
  buyHamster(hamster){
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
    }
}

const Timmy = new Person('Timmy');
Timmy.ageUp(5);
console.log("After aging 5 years: " , Timmy);
Timmy.eat(5);
console.log("After eating 5 times: " , Timmy);
Timmy.exercise(5);
console.log("After exercising 5 times: " , Timmy);
Timmy.ageUp(9);
console.log("After aging 9 years: " , Timmy);
Timmy.buyHamster(Gus);
console.log("After buying hamster: " , Timmy);
Timmy.ageUp(15);
console.log("After aging 15 years: " , Timmy);
Timmy.eat(2);
console.log("After eating 2: " , Timmy);
Timmy.exercise(2);
console.log("After exercising twice: " , Timmy);
