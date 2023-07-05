import data from './data/ghibli/ghibli.js';
import{director,dataAño,dataAñoAntiguas}from './data.js';

const datapeliculas = data.films

const contenedor = document.getElementById("contenedor");
function showData(data){
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    /*console.log(element.poster);*/
    const containerPeliculas = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const descripcion = document.createElement ("p");
    const año = document.createElement("h1");
    img.src = element.poster;
    title.textContent = element.title;
    año.textContent = element.release_date;
    title.classList.add("hidden");
    descripcion.classList.add("hidden");
    descripcion.textContent = element.description;
    containerPeliculas.appendChild(img)
    containerPeliculas.appendChild(title)
    containerPeliculas.appendChild(descripcion)
    containerPeliculas.appendChild(año)
    contenedor.appendChild(containerPeliculas);
    containerPeliculas.addEventListener("click", function (){ 
      title.classList.toggle("hidden");
      descripcion.classList.toggle("hidden")
          
    } ); 
  
  }
}
showData(datapeliculas)

const seleDirector = document.getElementById("directores")

seleDirector.addEventListener("change", () => {
  const directorSelected = seleDirector.value;
  const peliculas = director(directorSelected, datapeliculas);
  contenedor.innerHTML = '';
  showData(peliculas);
})
const ordenAño = document.getElementById("año")
function ordenAños() { 
  const nuevoOrden = dataAño( datapeliculas)
  contenedor.innerHTML = '';  
  return showData(nuevoOrden);
}

function añosAntiguos() {
  const antiguoOrden = dataAñoAntiguas(datapeliculas)
  contenedor.innerHTML = '';
  return showData(antiguoOrden);
}

ordenAño.addEventListener('click', function(){
  if (ordenAño.value === 'Mas Recientes') {
    ordenAños ();
  } else if (ordenAño.value === 'Mas Antiguas'){
    añosAntiguos();
  }
});
