function findLargest(n1, n2, n3) {
  let largestNum = 0;
  if (n1 > n2 && n1 > n3) {
    largestNum = n1;
  } else if (n2 > n1 && n2 > n3) {
    largestNum = n2;
  } else {
    largestNum = n3;
  }

  return largestNum;
}

function findLargest2(...args) {
    let a = Math.max(...args);
    return a;
}

module.exports = {
  lrg: findLargest,
  lrg2: findLargest2
};