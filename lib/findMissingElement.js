/*
 *
 * Given two arrays,
 * Second array is missing one element from the first array.
 * Find the missing element.
 *
 * Elements are always non-negative numbers
 * Duplicate elements are allowed
 *
 * findMissingElement([4,1,0,2,9,6,8,7,5,3], [6,4,7,2,1,0,8,3,9]); // 5
 *
 * Try to achieve the BEST time complexity.
 *
 */

export default function findMissingElement(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  for (const value1 of arr1){
    sumArr1 += value1;
  }
  for (const value2 of arr2){
    sumArr2 += value2;
  }
  return sumArr1 - sumArr2;
}
