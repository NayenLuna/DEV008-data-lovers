
import data from './data/ghibli/ghibli.js';
import {ghibli} from './data.js';
const peliculas = data.films
const contenedor = document.getElementById("contenedor");
function showData(data){
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    console.log(element.poster);
    const containerPeliculas = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const descripcion = document.createElement ("p");
    img.src = element.poster;
    title.textContent = element.title;
    descripcion.textContent = element.description;
    containerPeliculas.appendChild(img)
    containerPeliculas.appendChild(title)
    containerPeliculas.appendChild(descripcion)
    contenedor.appendChild(containerPeliculas);
    

  }
}
showData(peliculas)