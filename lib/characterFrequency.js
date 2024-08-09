/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Gotcha ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *
 */

export default function characterFrequency(string) {
  const obj = {};

  for (const char of string) {
    obj[char] ? obj[char]++ : obj[char] = 1;
  }

  const objArray = Object.entries(obj);

  return objArray.sort(function (a, b){
    if(a[1] > b[1]) {
      return -1;
    }
    if((a[0] < b[0]) && (a[1] === b[1])) {
      return -1;
    }
  });
}
