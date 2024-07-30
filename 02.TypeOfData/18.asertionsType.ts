// Aserciones de tipo
// Recordar que TS no funciona en tiempo de Ejecución!!!

//! INCORRECTO
// Ya TS no puede saber si es null, porque le estamos diciendo que es un HTMLCanvasElement 
const canvas1 = document.getElementById('span') as HTMLCanvasElement;
if (canvas1 !== null) {
  const context = canvas1.getContext('2d');
}

//! INCORRECTO
// 
const canvas2 = document.getElementById('span');

if (canvas2 !== null) {
  const context = (canvas2 as HTMLCanvasElement).getContext('2d');
  // Al compilar esta comprobación desaparece, no se estaría comprobando e intentaría acceder al context del span, lo que rompería el código
}


//* CORRECTO
const canvas = document.getElementById('canvas');
// por el if, TS puede inferir que canvas puede ser solamente un HTMLCanvasElement
// y si no lo es, pues no entrará a buscar su context (del span por ej) 
if (canvas instanceof HTMLCanvasElement) {
  const context = canvas.getContext('2d');
}
