import * as assert from 'assert';
import sumOfDigits from '../src/index';

const testSamples = [
  { input: 'null', expectedResult: null, description: 'Should not accept null' },
  { input: undefined, expectedResult: null, description: 'Should not accept undefined' },
  { input: 'abc', expectedResult: null, description: 'Should not accept a non-integer' },
  { input: true, expectedResult: null, description: 'Should not accept a boolean' },
  { input: false, expectedResult: null, description: 'Should not accept a boolean' },
  { input: -10, expectedResult: null, description: 'Should not accept a negative integer' },
  { input: 78, expectedResult: 15, description: 'Should return 15 = (7 + 8)' },
  { input: 198, expectedResult: 18, description: 'Should return 18 = (1 + 9 + 8)' },
  { input: 2, expectedResult: 2, description: 'Should return 2 = (2)' },
];

describe('Array', () => {
  testSamples.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(sumOfDigits(sample.input), sample.expectedResult);
    });
  });
});
