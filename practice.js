var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move);
var greeting = "Hello";
console.log(greeting);
function greet(name) {
    return "Hello, ".concat(name);
}
console.log(greet("Alice"));
