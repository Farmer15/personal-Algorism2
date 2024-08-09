/**
 * Modify the String prototype to add a new method `isAnagram`.
 * `isAnagram` takes a single string argument. It returns true if that string
 * is an anagram of the string it was called on, and false otherwise.
 *
 * Example:
 *  ("roasting").isAnagram("organist"); // true
 *  ("presence").isAnagram("presents"); // false
 *
 * Anagrams should ignore spaces, punctuation, and capitalization:
 *  ("Quid est veritas?").isAnagram("Est vir qui adest."); // true
 *
 * Extra credit: It is bad practice to extend a native prototype with enumerable
 * properties. Make your isAnagram method non-enumerable.
 *
 * Extra extra credit: What is the complexity of your method in time?
 * There is an algorithm that uses O(n) time.
 *
 */

String.prototype.isAnagram = function (string) {
  const mainStr = this.toLowerCase();
  const confirmStr = string.toLowerCase();
  const mainStrObj = {};
  const confirmStrObj = {};
  let count = 0;

  for (const char of mainStr) {
    if ("a" <= char && char <= "z") {
      mainStrObj[char] ? mainStrObj[char]++ : mainStrObj[char] = 1;
      count++;
    }
  }

  mainStrObj.sumValue = count;
  count = 0;

  for (const char of confirmStr) {
    if ("a" <= char && char <= "z") {
      confirmStrObj[char] ? confirmStrObj[char]++ : confirmStrObj[char] = 1;
      count++;
    }
  }

  confirmStrObj.sumValue = count;

  if (mainStrObj.sumValue !== confirmStrObj.sumValue) {
    return false;
  }

  for (const char in mainStrObj) {
    if (!confirmStrObj[char]) {
      return false;
    }
  }

  return true;
};
