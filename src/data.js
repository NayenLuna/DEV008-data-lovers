export function director(nombreDirector,peliculas){
  const arrayResultado = [];
  for (let i = 0; i < peliculas.length; i++){     
    if (nombreDirector === peliculas[i].director){
      arrayResultado.push(peliculas[i])
    }
  }
   
  return arrayResultado
}
//Ordenar de más recientes
export const dataAño = (peliculas) => {
  const sortData = peliculas.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
  return sortData;
};
  
//Ordenar de más antiguas
export const dataAñoAntiguas = (peliculas) => {
  const sortData = peliculas.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
  return sortData;
};
