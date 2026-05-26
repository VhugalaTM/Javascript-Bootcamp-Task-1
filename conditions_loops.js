// Excercise 1
// Temperature check
console.log("Excercise 1:\n1.1 if-else");
let temp = 0;
if(temp < 0) {
    console.log("It's freezing");
}else if((temp >= 0) && (temp <=15)){
    console.log("It's cold");
}else if((temp >= 16) && (temp <=25)){
    console.log("It's mild");
}else if(temp > 25){
    console.log("It's warm");
}else{
    console.log("Invalid temperature");
}

console.log("\n1.2 Switch");
switch (true){
    case temp < 0 :
        console.log("It's freezing");
        break;
    case temp >= 0 && temp <= 15:
        console.log("It's cold");
        break;
    case temp >= 16 && temp <= 25:
        console.log("It's mild");
        break;
    case temp > 25:
        console.log("It's warm");
        break;
    default:
        console.log("Invalid temperature");
        break;
}

// Excercise 2
// Divisibility check
console.log("\nExcercise 2:\n2.1");
let num = 5;
if(num%2 == 0 && num%3 == 0){
    console.log("Divisible by both");
}else if(num%2 == 0){
    console.log("Divisible by 2");
}else if(num%3 == 0){
    console.log("Divisible by 3");
}else if(num%2 !=0 && num%3 !=0){
    console.log("Not divisible by 2 or 3");
}else{
    console.log("Invalid");
}
console.log("\n2.2");
switch(true){
    case num%2 == 0 && num%3 == 0 :
        console.log("Divisible by both");
        break;
    case num%2 == 0 :
        console.log("Divisible by 2");
        break;
    case num%3 == 0 :
        console.log("Divisible by 3");
        break
    case num%2 !=0 && num%3 !=0 :
        console.log("Not divisible by 2 or 3");
        break;
    default:
        console.log("Invalid");
        break;
}

// Excercise 3
// Divisibility check
console.log("\nExcercise 3:\n3.1");
for(let i = 1; i <=10; i++){
    console.log(i);
}

console.log("\n3.2");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\n3.3");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log("\n3.4");
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("\n3.5");
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log(largest);

// Excercise 4
// While loop
console.log("\nExcercise 4:\n4.1");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("\n4.2");
i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

console.log("\n4.3");
let sum2 = 0;
i = 1;
while (i <= 100) {
    sum2 += i;
    i++;
}
console.log(sum2);

console.log("\n4.4");
i = 5;
while (i < 50) {
    console.log(i);
    i += 5;
}

// Excercise 5
// Do While loop
console.log("\nExcercise 5:\n5.1");
let init = 1;
do {
    console.log(init);
    init++;
} while (init <= 10);

console.log("\n5.2");
let sum3 = 0;
i = 1;
do {
    sum3 += i;
    i++;
} while (i <= 100);
console.log(sum3);

console.log("\n5.3");
let userNum;
do {
    userNum = parseInt(prompt("Enter a number greater than 10:"));
} while (userNum <= 10);
console.log("Valid number entered: " + userNum);

console.log("\n5.4");
const secret = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== secret);
console.log("Congratulations! You guessed it!");