/**
 * Write a function that, given a string, finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 */

export default function longestRun(string) {
  let resultIndexArray = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j <= string.length; j++) {
      if (string[i] !== string[j]) {
        if (((resultIndexArray[1] - resultIndexArray[0] + 1) || 0) < (j - i)) {
          resultIndexArray = [i, j-1];
        }

       break;
      }
    }
  }

  return resultIndexArray;
}
