// INTERSECTION TYPES
type Employee = {
  name: string
  age: number
} // Es un tipo propio personalizado

function createEmployee(employee: Employee): Employee {
  const { name, age } = employee
  return { name, age }
} // -> Lo que returne es de tipo Employee

const employee0001 = createEmployee({ name: 'Emanuel', age: 38 }); // -> Es de tipo Employee
const employee0002 = createEmployee({ name: 'Karina', age: 34 }); // -> Es de tipo Employee
