/*

  문제 설명은 README를 참고하세요.

 */

export default function pathOnGrid(r, c) {
  return combination(r + c - 2, r - 1);
}

function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}
