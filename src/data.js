
 export function director(nombreDirector,peliculas){
    let arrayResultado = [];
    for (let i = 0; i < peliculas.length; i++){
      //console.log(peliculas[i].director)
      if (nombreDirector === peliculas[i].director){
       arrayResultado.push(peliculas[i])
      }
    }
   
    return arrayResultado
  }
//director("Hayao Miyazaki",peliculas)