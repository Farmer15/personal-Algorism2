/*
 *
 * Write a function solution that,
 * given two integers N and K,
 * returns a string containing exactly N letters of 'a' and exactly K letters of 'b'
 * with no 3 consecutive letters being the same
 * (in other words, neither "aaa" nor "bbb" may occur in the returned string).
 *
 * 1. Given A = 5 and B = 3, your function may return "aabaabab".
 *    Note that "abaabbaa" would ALSO be a correct answer.
 *    Your function may return ANY correct answer.
 * 2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb"
 *    or any of several other strings.
 * 3. Given A = 1 and B = 4, your function should return "bbabb",
 *    which is the only correct answer in this case.
 *
 * Assume that:
 * - A and B are integers within the range [0..100];
 * - at least one solution exists for the given A and B.
 *
 * In your solution, focus on correctness.
 * The performance of your solution will not be the focus of the assessment.
 *
 */

export default function generateString(N, K) {
  const root = new ConstructNode;
  const resultArray = [];

  constructChild(root);

  return resultArray[0];

  function constructChild(node) {
    if (node.val.length > N + K + 1) {
      return;
    }

    if (!(node.val + "a").includes("aaa")) {
      node.left = new ConstructNode(node.val + "a");
    }

    if (!(node.val + "b").includes("bbb")) {
      node.right = new ConstructNode(node.val + "b");
    }

    if (node.left) {
      constructChild(node.left);
    }

    if (node.right) {
      constructChild(node.right);
    }

    if (abCount(node.val)[0] === N && abCount(node.val)[1] === K) {
      resultArray.push(node.val);
    }
  }

  function abCount(str) {
    let countA = 0;
    let countB = 0;

    for(let i = 0; i < str.length; i++) {
      if (str[i] === "a") {
        countA++;
      }

      if (str[i] === "b") {
        countB++;
      }
    }

    return [countA, countB];
  }

  function ConstructNode(val) {
    this.val = val ?? "";
    this.left = null;
    this.right = null;
  }
}
