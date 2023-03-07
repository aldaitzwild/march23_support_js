let max = null;
let min = null;

let entered = parseInt(prompt("Saisir une valeur : "));

max = entered;
min = entered;

console.log("max : " + max);
console.log("min : " + min);


while(true)
{
    let valueEntered = prompt("Saisir une valeur : ");

    if(valueEntered === "quit")
        break;

    entered = parseInt(valueEntered);

    if(max < entered) {
        max = entered;
    }

    if(min > entered) {
        min = entered;
    }

    console.log("max : " + max);
    console.log("min : " + min);
}


console.log("max final : " + max);
console.log("min final : " + min);