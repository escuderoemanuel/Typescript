// Tipo para usar dentro de otros tipos
type HeroId = `${string}-${string}-${string}-${string}-${string}`

// Optional Properties
type Hero = {
  readonly id?: HeroId // La prop 'id' es sólo de lectura 'readonly y opcional '?' 
  name: string
  age: number
  isActive?: boolean
} // Es un tipo propio personalizado

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return {
    // id: 'hero0001', -> Da error porque el id es de tipo 'HeroId'
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
} // -> Lo que returne es de tipo Hero

const thor = createHero({ name: 'Thor', age: 1500, isActive: true }); // -> Es de tipo Hero
const cap = createHero({ name: 'Capitan America', age: 90 }); // -> Es de tipo Hero
const ironman = createHero({ name: 'Ironman', age: 45, isActive: false }); // -> Es de tipo Hero

thor.id = 1 // -> No da error porque 'id' es opcional, pero da error porque es solamente de lectura, es decir que no se puede asignar/reasignar
