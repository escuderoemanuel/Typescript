// No siempre es necesario tipar todos los datos
// puesto que al utilizar la extensión .ts
// typescript puede inferir qué tipo de dato es y más
let nombre = "Miguel"; // Sabe que es de tipo string
let edad = 30;

let a = 10;
let b = "Hola";
let c = 5;

let result = a + b; // Aquí inferiría que result es un string, puesto que uno de los elementos que va a sumar, es un string y no podría sumarse con un tipo number

let result2: number = a + b; // Aqui da error porque no puede 'result2' ser un number si uno de los elementos a sumar no es de tipo 'number'

let result3: number = a + c; // Aqui no da error porque ambos son de tipo 'number'

// PAra probar el código en el navegador -> https://www.typescriptlang.org/play/#code/Q
// Para probar el código en VSCode de un .ts es necesario correr tsc nombreDelArchivo.ts
// Lo compila a .js
// Para ver el resultado, ejecutar node nombreDelArchivo.js