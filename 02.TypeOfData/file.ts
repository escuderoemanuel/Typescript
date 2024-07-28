// TYPE OF DATA

const string : string = 'Hello World'
const number : number = 10
const boolean : boolean = true
const array : string[] = ['Hello', 'World']
const object : {name: string, age: number} = {name: 'Emanuel', age: 38}
const nullValue : null = null
const undefinedValue : undefined = undefined

// FUNCTIONS
function add(a: number, b: number): number {
  return a + b
}
const result = add(5, 10) // -> Si se introduce algo diferente a number, dará error

// INTERFACES
interface Person {
  name: string
  age: number
}
const personInterface: Person = {name: 'Emanuel', age: 38}

// CLASSES
class Car {
  brand: string
  model: string
  year: number

  constructor(brand: string, model: string, year: number) {
    this.brand = brand
    this.model = model
    this.year = year
  }
}
const myCar = new Car('Toyota', 'Corolla', 2020)

// ENUMS
enum Color {
  Red,
  Green,
  Blue
}
const myColor = Color.Blue

// UNION TYPES
let value: string | number = 'Hello'
value = 10 // -> No dará error porque es un union type

// INTERSECTION TYPES
type Employee = {
  name: string
  age: number
}

// TYPE ALIAS
type MyString = string
let myString: MyString = 'Hello World'

// ANY
let anyValue: any = 'Hello World'
anyValue = 10

// VOID
function printMessage(message: string): void {
  console.log(message)
}
printMessage('Hello World')


// Tipado por 'inferencia'
const person = 'Emanuel' // -> Por 'inferencia' TS sabe que es un string
const age = 38 // -> Por 'inferencia' TS sabe que es un number
const isStudent = true // -> Por 'inferencia' TS sabe que es un boolean
const hobbies = ['Train', 'Play the Guitar'] // -> Por 'inferencia' TS sabe que es un array de strings
const address = {
  street: 'Main St',
  city: 'New York',
  country: 'USA'
} // -> Por 'inferencia' TS sabe que es un objeto

// Tipado explicito
const person2: string = 'Emanuel'
const age2: number = 38
const isStudent2: boolean = true
const hobbies2: string[] = ['Train', 'Play the Guitar']
const address2: {
  street: string
  city: string
} = {
  street: 'Main St',
  city: 'New York'
}

// Template literals
const introduction = `My name is ${person} and I am ${age} years old. I live in ${address.city} and I like to ${hobbies.join(', ')}.`
console.log(introduction)



