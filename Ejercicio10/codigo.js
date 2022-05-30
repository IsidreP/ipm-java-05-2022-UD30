
var texto = prompt("Introdiuce texto"); 


function palindromo(parametro){

  if(parametro==texto.split("").reverse("").join("")){
    return "El texto es un palíndromo";
  }else{
    return "El texto no es un palíndromo";
  }
}

console.log(palindromo(texto));