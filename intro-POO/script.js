class Person{
    #age;
    constructor(name, age, campus,skills){
        this.name = name;
        this.#age = age;
        this.campus = campus;
        this.skills = skills;
    }
    setAge(age){
        if(age >= 1 && age <= 99){
            this.#age = age;
        }
    }

    getAge(){
        if(this.campus === "Mars"){
            return this.#age * 2
        }else {
            return this.#age;
        }
    }

    sayHello(){
        return `${this.name}, ${this.getAge()} ans, vivant à ${this.campus}, connait : ${this.skills}`
    }
}

class Student extends Person{
    constructor(name, age, campus,skills, isGraduated){
        super(name,age,campus,skills);
        this.isGraduated = isGraduated;
    }
}

class Trainer extends Person{
    constructor(name, age, campus,skills, startingDate){
        super(name,age,campus,skills);
        this.startingDate = startingDate;
    }
}

const person1 = new Person("Bob",23,"London",["Java"]);
const person2 = new Person("Toto",23,"Mars",["Java"]);
const student1 = new Student("Julie",30,"Berlin",["Javascript","React"],true);
const trainer1 = new Trainer("Romain",34,"Berlin",["Java","Angular"],"20/03/2023");


console.log(person1.sayHello());
console.log(person2.sayHello());