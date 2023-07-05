import{director,dataAño,dataAñoAntiguas}from '../src/data';

it('array_of_movies', () => {
  const peliculas = []
  const expected = []
  const result = director('Hayao Miyazaki', peliculas)
  expect(result).toEqual(expected)
})

it('array_dataAño', () => {
  const peliculas = [];
  expect(dataAño(peliculas)).toEqual([]);
});

it('array_dataAñoAntiguas', () => {
  const peliculas = [];
  const result = dataAñoAntiguas(peliculas);
  expect(result).toEqual([]);
});
