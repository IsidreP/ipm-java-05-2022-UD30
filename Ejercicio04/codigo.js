
// Definición de Array

var valores=[true, 5, false, "hola", "adios", 2];


// Apartado 1
var texto1=valores[3];
var texto2=valores[4];

if(texto1.length>texto2.length){
    console.log("El texto que tiene mas caracteres es: "+texto1);
}else{
    console.log("El texto que tiene mas caracteres es: "+texto2);
}


// Apartado 2
var boleano1=valores[0];
var boleano2=valores[2];

var resultado1=boleano1+boleano2;
var resultado2=boleano1*boleano2;

if(resultado1>0){
    console.log("La suma da true");
}else{
    console.log("La suma no da true");
}

if(resultado2<1){
    console.log("La multiplicación da false");
}else{
    console.log("La multiplicación no da false");
}

// Apartado 3
var numero1=valores[1];
var numero2=valores[5];

resul1=numero1+numero2;
resul2=numero1-numero2;
resul3=numero1*numero2;
resul4=numero1/numero2;
resul5=numero1%numero2;

console.log(resul1);
console.log(resul2);
console.log(resul3);
console.log(resul4);
console.log(resul5);
