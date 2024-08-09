/*
 *
 * Generate all permutations of a given string.
 *
 * < Examples >
 *
 * getPermutations("abc")  // ["abc", "acb", "bac", "bca", "cab", "cba"]
 *
 */

export default function getPermutations(str) {
  if (str.length === 1) return str;

  const resultArray = [];

  for (let i = 0; i < str.length; i++) {
    const copiedArray = [...str];

    copiedArray.splice(i, 1);

    for (let j = 0; j < getPermutations(copiedArray).length; j++) {
      const result = str[i] + getPermutations(copiedArray)[j];
      resultArray.push(result);
    }
  }

  return resultArray.sort();
}
