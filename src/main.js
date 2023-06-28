import{peliculas,director}from './data.js';
const contenedor = document.getElementById("contenedor");
 function showData(data){
    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      /*console.log(element.poster);*/
      const containerPeliculas = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h1");
      const descripcion = document.createElement ("p");
      img.src = element.poster;
      title.textContent = element.title;
      title.classList.add("hidden");
      descripcion.classList.add("hidden");
      descripcion.textContent = element.description;
      containerPeliculas.appendChild(img)
      containerPeliculas.appendChild(title)
      containerPeliculas.appendChild(descripcion)
      contenedor.appendChild(containerPeliculas);
      containerPeliculas.addEventListener("click", function (){ 
          title.classList.toggle("hidden");
          descripcion.classList.toggle("hidden")
          
      } ); 
  
    }
  }
  showData(peliculas)


const btnInicio= document.getElementById("inicio1")
//Función para ingresar a la página inicio
function displayInicio(){
  //ocultar directores
  const director = document.getElementById('directores');
  director.style.display = "none";
  //ocultar año
  const año = document.getElementById('año');
  año.style.display = "none";
  //Mostrar contenedor
  const inicio = document.getElementById('contenedor');
  inicio.style.display = "flex";
}
btnInicio.addEventListener('click', displayInicio);
const btnDirector= document.getElementById("directores1")
//Función para ingresar a la página directores
function displayDierctor(){
  //ocultar inicio
  const inicio = document.getElementById('contenedor');
  inicio.style.display = "none";
  //ocultar año
  const año = document.getElementById('año');
  año.style.display = "none";
  //Mostrar directores
  const director = document.getElementById('directores');
  director.style.display = "flex";
}
btnDirector.addEventListener('click',  displayDierctor);
const btnAño= document.getElementById("año1")
//Función para ingresar a la página año
function displayAño(){
  //ocultar inicio
  const inicio = document.getElementById('contenedor');
  inicio.style.display = "none";
  //ocultar directores
  const director = document.getElementById('directores');
  director.style.display = "none";
  //Mostrar año
  const año = document.getElementById('año');
  año.style.display = "flex";
}
btnAño.addEventListener('click',  displayAño);

console.log(director)
const directores= document.getElementById(directores)
