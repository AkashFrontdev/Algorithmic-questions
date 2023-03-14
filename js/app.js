//The first solution
var a = 5;
var b = 7;
b = 5;
a = 7;
console.log(a);
console.log(b);

// // The second solution
var a = 5;
var b = 7;
var c = b;
b = a;
a = c;
console.log(a);
console.log(b);


// Fizzbuzz question
var question = prompt("Enter your number: ");

   
if (question % 3 === 0 && question % 5 === 0) {
  console.log("fizzbuzz");
} else if (question % 5 === 0) {
  console.log("buzz");
} else if (question % 3 === 0) {
  console.log("fizz");
}
