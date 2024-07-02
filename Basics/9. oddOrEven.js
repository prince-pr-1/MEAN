let num = 6;

let result = checkOddOrEven(50);
console.log(result);

function checkOddOrEven(num) {
  // if (num % 2 == 0) {
  //     return "even";
  // } else {
  //     return "odd";
  // }
  return num % 2 == 0 ? "even" : "odd";
}
