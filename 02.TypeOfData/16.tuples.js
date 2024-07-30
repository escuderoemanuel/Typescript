var text_primary = ['23', 25, 255];
var text_secondary = [23, 25, 255];
// Hay un problema y es que se puede modificar mediante metodos de arrays
text_secondary.push(16);
console.log(text_secondary); // Esto muestra en consola -> ['user1', '25', 'true', 'other' ]
// Para evitar esto se puede usar readonly
var user2 = ['user1', 25, true];
// const id: uuid = 'a4s52c'
// const id2: uuid = 'a4s52c-a4s52c'
// const id3: uuid = 'a4s52c-a4s52c-a4s52c'
