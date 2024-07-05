function sum(digits) {
  let answer = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < digits.length; i++) {
    answer += digits[i];
  }

  return answer;
};

function sumOfDigits(number) {
  if (!Number.isInteger(number)) return null;
  if (number < 0) return null;
  // eslint-disable-next-line prefer-const
  const digits = number.toString().split('').map(Number);
  return sum(digits);
};

export default sumOfDigits;
