const firstValue = parseInt(prompt("Veuillez taper la première valeur"));
const operator = prompt("Veuillez taper l'operateur");
const secondValue = parseInt(prompt("Veuillez taper la deuxième valeur"));
let result;

switch(operator){
    case "+":
        console.log(firstValue + secondValue);
        break;
    case "-":
        console.log(firstValue - secondValue);
        break;
    case "*":
        console.log(firstValue * secondValue);
        break;
    case "/":
        console.log(firstValue / secondValue);
        break;
    default:
        console.log("Operateur non supporté");
        break;
}
