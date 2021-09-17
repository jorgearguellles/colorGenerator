const hex = [1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
const btn = document.getElementById("btn"); // Selecciono el elemento que tiene id="btn" y lo guardo en la variable llamada btn
const color = document.querySelector(".color"); // Selecciono el elemento del DOM con la class="color" y lo guardo en la variable color

// A la variable btn le agrego un escuchador de eventos, atento al evento "click"
btn.addEventListener("click", function(){
  let hexColor = "#";
  for(let i = 0; i < 6 ; i++){
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor; // Asignarle al contenido del texto el hexCOlor generado 
  document.body.style.backgroundColor = hexColor; //Asignarle el hexColor generado al atributo del color de fondo del BODY
});

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}