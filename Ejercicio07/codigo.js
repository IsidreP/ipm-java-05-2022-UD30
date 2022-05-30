
var numero = parseInt(prompt("Introdiuce un numero")); 
var resultado =1;


for (let i = 0; i < numero; i++) {
        resultado *= numero-i;
  }

console.log(resultado);