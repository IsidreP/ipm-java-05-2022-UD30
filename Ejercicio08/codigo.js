
var numero = parseInt(prompt("Introdiuce un numero")); 


function par(num){
  var resultado =1;  
  
  resultado=num%2;

  if(resultado==1){
    return "El numero que has introducido es impar";
  }else{
    return "El numero que has introducido es par";
  }
}

console.log(par(numero));