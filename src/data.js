import data from './data/ghibli/ghibli.js';
export const peliculas = data.films
 export function director(nombreDirector,peliculas){
    let arrayResultado = [];
    for (let i = 0; i < peliculas.length; i++){
      //console.log(peliculas[i].director)
      if (nombreDirector === peliculas[i].director){
       arrayResultado.push(peliculas[i])
      }
    }
    console.log(arrayResultado)
    return arrayResultado
  }
director("Hayao Miyazaki",peliculas)