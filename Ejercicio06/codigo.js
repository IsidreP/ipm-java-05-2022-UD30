

let DNI = prompt("Introdiuce un DNI sin letra");
let letraDNI = prompt("Introdiuce la letra del DNI");


if(DNI<0 || DNI>99999999){alert("El numero introducido es incorrecto")}

resultado = DNI%23;

console.log(resultado);

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T',];


var letra = letras[resultado];
console.log("La letra es: "+letra);

if(letraDNI!=letra){
    alert("La letra que ha indicado no es correcta")
}else{
    alert("El numero y la letra del DNI son correctos")
}