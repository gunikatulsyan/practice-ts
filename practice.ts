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