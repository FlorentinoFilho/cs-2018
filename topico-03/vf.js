function falso() {
    console.log("falso");
    return false;
}


function verdadeiro() {
    console.log("verdadeiro");
    return true;
}


console.log("inicio");
//console.log(verdadeiro() || falso());
console.log(falso() || verdadeiro());
console.log("fim");
