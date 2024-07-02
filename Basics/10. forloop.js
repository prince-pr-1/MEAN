
for (let i = 0; i < 3; i++) {
    console.log(i);
}

/*

for loop has 3 sections 

1. initialization ie, let i = 0
2. condition ie,  i < 3
3. iteration ie, i++

1 -> initialization value here in the above case it is 0 
and hence the loop will be started from 0.

2 -> the loop works as long as the given condition is
true and stops when the condition becomes false. 
Here, the condition is i < 3. At first the value of i is 0
and the condition 0 < 3 returns true.

3 -> since the condition is true the loop will check the 
iteration statement which is i++ so, i will increased by 1.

When the value of i becomes 3, the condition returns false
as 3 < 3 is false. So the loop stops executing.

*/

console.log("-------End First Loop-------");

// The below program finds the sum of 1 to 100 numbers

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum :",sum);

console.log("-------End Second Loop-------");

/* 
The below program finds the sum of all even numbers 
between 1 to 100.
 */
sum = 0;
for (let i = 0; i <= 100; i += 2) {
    sum += i;
}

console.log("Sum :",sum);

console.log("-------End Third Loop-------");




