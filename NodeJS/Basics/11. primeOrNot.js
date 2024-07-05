/* 

A prime number is a number greater than 1 that can only 
be divided by 1 and itself without leaving a remainder. 
In other words, it has exactly two distinct positive divisors: 1 
and the number itself.

Remainders: A remainder is the amount left over after 
division when one number does not divide the other number 
exactly.

in js, num % num gives you the reminder.
ie, 10 % 3 gives 1 as reminder.
ie, 3 x 3 + 1 = 10

Divisors: A divisor (also called a factor) of a number is a 
number that divides into another number exactly without 
leaving a remainder.

12 ÷ 1 = 12
12 ÷ 2 = 6
12 ÷ 3 = 4
12 ÷ 4 = 3
12 ÷ 6 = 2
12 ÷ 12 = 1

*/

function checkPrime(num) {
    let flag = false;
    for (let i = 2; i <= num / 2; i++) {
        let reminder = num % i;
        if (reminder == 0) {
            flag = true;
        }
    }
    if (flag) {
        // console.log(num, "is not a prime number");
        return num + " is not a prime number";
    } else {
        // console.log(num, "is a prime number");
        return num + " is a prime number";
    }
}




/* 
My modification :

function checkPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        let reminder = num % i;
        if (reminder == 0) {
            console.log(num, "is not a prime number");
            return
        }
    }
    console.log(num,"is a prime number");
}
 */
// checkPrime(20);
// checkPrime(21);
// checkPrime(23);
// checkPrime(27);
// checkPrime(7);
// checkPrime(8);

module.exports = checkPrime;