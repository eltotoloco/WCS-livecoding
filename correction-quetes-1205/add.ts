function hello(name:string):void {
    console.log("Hello " + name);
}

const firstName:string = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a:string, b:string):string {
    return a + b;
}

const wcs:string = concat("Wild", concat("Code", "School"));
console.log(wcs);