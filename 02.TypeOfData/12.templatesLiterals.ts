// Tipado explicito
const person: string = 'Emanuel'
const age: number = 38
const isStudent: boolean = true
const hobbies: string[] = ['Train', 'Play the Guitar']
const address: {
  street: string
  city: string
} = {
  street: 'Main St',
  city: 'New York'
}
// Template literals
const introduction = `My name is ${person} and I am ${age} years old. I live in ${address.city} and I like to ${hobbies.join(', ')}.`
console.log(introduction)