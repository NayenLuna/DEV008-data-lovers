
import data from './data/ghibli/ghibli.js';
import {ghibli} from './data.js';
const peliculas = data.films
for (let i = 0; i < peliculas.length; i++) {
    const element = peliculas[i];
    
    console.log( element.title);
    console.log (element.director);
    const contenedor = document.getElementById("contenedor");
    for (let i = 0; i < peliculas.length; i++) {
      let element = peliculas[i];
      console.log(element.poster);
      const img = document.createElement("img");
      img.src = element.poster;
      contenedor.appendChild(img);
    }
}