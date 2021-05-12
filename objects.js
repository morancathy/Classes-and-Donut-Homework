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
Gus.wheelRun();
console.log(Gus);
