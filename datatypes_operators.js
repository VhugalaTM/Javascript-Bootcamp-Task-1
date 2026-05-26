// Excercise 1
// Numbers
console.log("Excercise 1: ");
let num1 = 100;
let num2 = 10.23;

console.log("Addition:",(num1 + num2));
console.log("Subtraction:",(num1 - num2));
console.log("Multiplication:",(num1 * num2));
console.log("Division:",(num1 / num2));
console.log("Modulus:",(num1 % num2));
console.log("Exponential:",(num2 ** num1));

// Excercise 2
// Boolean and Operators
console.log("\nExcercise 2: \n2.1");
let x = 10, y = 34;
let result1 = (x > y);
let result2 = (x <= y);
let result3 = (x == y);
let result4 = (x != y);
console.log(`${x} is greater than ${y}: ${result1}`);
console.log(`${x} is less than or equal to ${y}: ${result2}`);
console.log(`${x} is equal to ${y}: ${result3}`);
console.log(`${x} is not equal to ${y}: ${result4}`);

console.log("\n2.2");
let a = true, b = false;
console.log("a AND b:",(a && b));
console.log("a OR b:",(a || b));
console.log("NOT a:",!(a));

console.log("\n2.3");
let p = 10;
p+=3;
console.log("a)",p);

p-=3;
console.log("b)",p);

p*=3;
console.log("c)",p);

p/=3;
console.log("d)",p);

p%=3;
console.log("e)",p);
