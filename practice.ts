enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
console.log(move);

let greeting = "Hello";
console.log(greeting);

function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Alice"));

class Animal {
  constructor(public name: string) {}
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
const dog = new Animal("Dog");
dog.speak();