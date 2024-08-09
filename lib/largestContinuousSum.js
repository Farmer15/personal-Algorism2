/*
 *
 * Given an array of integers (positive and negative) find the largest continuous sum.
 *
 * < Examples >
 *
 * f([ 1, 3, -10, 2, 7 ])  // 9  (from 2 to 7)
 *
 */

export default function findLargestContinuousSum(array) {
  let startIndex = 0;
  let endIndex = 0;
  let result = -Infinity;

  while(startIndex <= array.length - 1 || endIndex <= array.length - 1) {
    if (sumElementAToB(array, startIndex, endIndex) >= result) {
      result = sumElementAToB(array, startIndex, endIndex);
    }

    if (endIndex === array.length - 1) {
      startIndex++;
      endIndex = startIndex;
    } else {
      endIndex++;
    }
  }

  return result;

  function sumElementAToB(arr, a, b) {
    let total = 0;

    for (let i = a; i <= b; i++) {
      total += arr[i];
    }

    return total;
  }
}
