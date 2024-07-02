findLargest(1, 2, 3);
findLargest(-11, 2, 3);
findLargest(2, 2, 2);
findLargest(6, 7, 5);
console.log("--------x--------");
findLargest2(1, 2, 3);
findLargest2(-11, 2, 3);
findLargest2(2, 2, 2);
findLargest2(6, 7, 5);
findLargest2(1, 2, 3, 4, 5, 6, 7, 8, 9);

function findLargest(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1 + " is largest");
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2 + " is largest");
  } else {
    console.log(n3 + " is largest");
  }
}

function findLargest2(...args) {
    let a = Math.max(...args);
    console.log(a, "is largest");
}