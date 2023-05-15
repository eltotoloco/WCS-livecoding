class Animal implements Photographable{
     name:string;
     age:number;
     pic:string;
     color:string;
    constructor(name:string,age:number, pic:string, color:string="grey") {
        this.name=name;
        this.age=age;
        this.pic = pic;
        this.color = color;
    }
    photograph(): void {
        console.log("Here's a picture of a" + this.constructor.name)
    }
}

interface Photographable {
    photograph(): void;
  }
  
  interface Meowable {
    meow(): void;
  }
  
  interface Barkable {
    bark(): void;
  }
  
  interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }
  
  interface Caressable {
    caress(): void;
  }
  
  interface Feedable {
    feed(): void;
  }
  

class FourLegedAnimal extends Animal{
    pet() {
        console.log("Petting a " + this.constructor.name);
    }
}

class Cat extends FourLegedAnimal implements Meowable {
    meow(){
        console.log("Meow");
    }
}

class Dog extends FourLegedAnimal implements Barkable{
    bark(){
        console.log("wuuuf");
    }
}

class Bird extends Animal implements Flyable {
    fly(){
        console.log("i'm flying");
    }
}

class Duck extends Bird implements Swimmable, Feedable{
    feed(): void {
        throw new Error("Method not implemented.");
    }
    swim(): void {
       
    }

}

class Fish extends Animal implements Swimmable{
    swim(){
        console.log("swiiiiish");
    }
}


const takePicture = function(element:Photographable){
    element.photograph();
}

const fly = function(animal:Flyable){
    animal.fly();
}

const swim = function(animal:Swimmable){
    animal.swim();
}

const meow = function(animal:Meowable){
    animal.meow();
}

const bark = function(animal:Barkable){
    animal.bark();
}

const pet = function(animal:FourLegedAnimal){
    animal.pet();
}

class EuropeanCat extends Cat {
    constructor(name:string,age:number, pic:string) {
        super(name,age,pic,"black");
    }
  }
const feed = function(animal:Animal){
    if(animal.color === "noir"){
        console.log("feeding " + animal.name + animal.color)
    }else{
        console.log("cannot feed me");
    }
}



const cat1 = new Cat("Chat européen", 23,"🐈","noir");
const cat2 = new Cat("Chat chartreux", 14,"🐈");

const dog1 = new Dog("Chien Terre-Neuve", 14,"🐕", "noir");
const dog2 = new Dog("Chien Moon Moon", 14,"🐕");

const bird1 = new Bird("Mésange", 14,"🐦");
const bird2 = new Bird("Merle", 14,"🐦", "noir");

const fish1 = new Fish("Thon", 14,"🐟");
const fish2 = new Fish("Requin", 14,"🐟");

const asticot = new Animal("Asticot",1,"🪰")

takePicture(cat1);
