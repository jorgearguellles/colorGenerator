const colors = ["green","red","rgb(100,150,200)","#f4f7"];

const btn = document.getElementById("btn"); //Selecciono el botón con el ID=btn
const color = document.querySelector(".color"); //Selecciono la etuqieta con clase=color

btn.addEventListener("click", function(){
  // Obtener un número aleatorio entre 0 y 3 según mi Array de colores
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}