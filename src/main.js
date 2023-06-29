import data from './data/ghibli/ghibli.js';
import{director}from './data.js';

 const datapeliculas = data.films

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
  showData(datapeliculas)

const seleDirector = document.getElementById("directores")

seleDirector.addEventListener("change", () => {  
  const directorSelected = seleDirector.value;
 const peliculas = director(directorSelected, datapeliculas);
  contenedor.innerHTML = '';
  showData(peliculas);  
})

