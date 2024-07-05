/* 
Local modules are the modules created by us.
- use module.exports to export a function from here.
- module.exports can export literals ie, "something",
object ie, { functionName } or {customeName : functionName},
function ie, module.exports = functionName,
or function as a class...
*/

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
  method1: findLargest,
  method2: findLargest2,
};
