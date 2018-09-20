let sequencia = "ola algo e o TEXTO";

function palavraMaisExtensa(sen) {
    return sen.match(/\w+/g).sort(function(a,b) {return b.length - a.length;})[0];
}






function palex(qualp) {
    vet=qualp.match(/\w+/g);
    vet.sort(function(a,b) {
        return b.length-a.length;
    });
    console.log(vet[0]);
}



console.log(palex(sequencia));
