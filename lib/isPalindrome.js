/*
 *
 * Given an integer x, return `true` if x is a palindrome, and `false` otherwise.
 *
 * < Example 1 >
 * Input: 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * < Example 2 >
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
 * Therefore it is NOT a palindrome.
 *
 * < Example 3 >
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is NOT a palindrome.
 *
 */
export default function isPalindrome(x) {
  let stringX = String(x);

  for(let i = 0; i < stringX.length; i++) {
    const isSameNum = stringX[i] === stringX[stringX.length - i - 1];
    if (!isSameNum) {
      return false;
    }
  }

  return true;
}
