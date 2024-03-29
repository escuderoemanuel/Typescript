// TYPE OF DATA

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



