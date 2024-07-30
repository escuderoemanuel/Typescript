// Las tuplas sirven para tener que respetar el formato de un arreglo y su longitud
type RGB = [number, number, number]
let text_primary: RGB = ['23', 25, 255]
let text_secondary: RGB = [23, 25, 255]
// Hay un problema y es que se puede modificar mediante metodos de arrays
text_secondary.push(16)
console.log(text_secondary) // Esto muestra en consola -> [ 23, 25, 255, 16 ]

// Para evitar esto se puede usar readonly
type RGBa = readonly [number, number, number, number]
let bg_primary: RGBa = [23, 25, 255, 1]
let bg_secondary: RGBa = [23, 25, 255, 1]
bg_primary.push(105)

// Las tuplas pueden tener varios tipos de datos
type uuid = `${string}-${string}-${string}`
// const id: uuid = 'a4s52c'
// const id2: uuid = 'a4s52c-a4s52c'
// const id3: uuid = 'a4s52c-a4s52c-a4s52c'

