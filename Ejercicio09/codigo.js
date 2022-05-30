
var texto = prompt("Introdiuce texto"); 


function letras(parametro){

  if(parametro==texto.toUpperCase()){
    return "El texto esta en mayusculas";
  }else if(parametro==texto.toLowerCase()){
    return "El texto esta en minusculas";
  }else{
    return "El tecto contiene mayusculas y minusculas"
  }
}

console.log(letras(texto));