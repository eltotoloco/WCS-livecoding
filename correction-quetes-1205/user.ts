// challenge.ts

interface User{
    name:string;
    age:number; 
    birthday?:string  
}

const prettyPrintWilder = (users:User[]):void => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };

  const fullName = "Bob";
  const fruits:string[] = ["banane","apple"];
  const wilders:User[] = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", birthday: "10/02/1990", age:33 };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);