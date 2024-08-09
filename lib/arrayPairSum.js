/*
 *
 * Given an integer array, output the number of pairs that sum up to a specific value k.
 * Consider the fact that the same number can add up to k with its duplicates in the array.
 *
 * < Examples >
 *
 * f(10, [3, 4, 5, 6, 7])  // 2     Due to [6, 4], [7, 3]
 * f(8, [3, 4, 5, 4, 4])   // 4     Due to [3, 5], [4, 4], [4, 4], [4, 4]
 *
 */

export default function arrayPairSum(k, array) {
  let obj = {};

  for (const index1 in array){
    for (const index2 in array){
      if (index1 < index2){
        obj[array[index1] + array[index2]] ? obj[array[index1] + array[index2]]++ : obj[array[index1] + array[index2]] = 1;
      }
    }
  }

  return obj[k] ?? 0;
}
