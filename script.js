let max = null;
let min = null;


function addANewNumber() {
    let valueEntered = prompt("Saisir une valeur : ");

    entered = parseInt(valueEntered);

    if(max < entered || max === null) {
        max = entered;
    }

    if(min > entered || min === null) {
        min = entered;
    }

    const maxValue = document.getElementById("maxValue");
    maxValue.innerHTML = max;
    maxValue.style.color = "red";

    const minValue = document.getElementById("minValue");
    minValue.innerHTML = min;
    minValue.style.fontFamily = "Arial";

    const elements = document.getElementsByClassName("label");
    for (const element of elements) {
        element.classList.toggle("english");
    }
}

const btn = document.getElementById("btnAddANumber");
btn.addEventListener("click", addANewNumber);
