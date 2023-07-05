const filtrarladata = (String)
describe('filtrarladata', () => {
  it('is a function', () => {
    expect(typeof resultado).toBe('function');
  });

  it('mostrar peliculas de un solo director', () => {
    expect(filtrarladata()).toBe('metodo');
  });
});


/*describe('filtrodedatos', () => {
  it('is a function', () => {
    expect(typeof filtroddedatos).toBe('function');
  });

  it('returns `filtrodedatos`', () => {
    expect(filtrodedatos()).toBe('peliculas');
  });
});*/
