import { director, peliculas } from '../src/data.js';


describe('data', () => {
  it('is a function', () => {
    expect(typeof data).toBe('function');
  });

  it('returns `data`', () => {
    expect(data()).toBe('data');
  });
});


describe('filtrodedatos', () => {
  it('is a function', () => {
    expect(typeof filtroddedatos).toBe('function');
  });

  it('returns `filtrodedatos`', () => {
    expect(filtrodedatos()).sort('peliculas');
  });
});
