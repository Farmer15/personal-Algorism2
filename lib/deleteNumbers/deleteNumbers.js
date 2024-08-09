/*

  문제 설명은 README를 참고하세요.

 */

export default function deleteNumbers(n, board) {
  let totalMinWay = getMinWay(board, [0, 0], getFindPos(board, 1)) + 1;

  for (let i = 1; i < n * n; i++) {
    totalMinWay += getMinWay(board, getFindPos(board, i), getFindPos(board, i + 1)) + 1;
  }

  return totalMinWay;
}

function getFindPos(feild, target) {
  for (const column in feild) {
    for (const row in feild) {
      if (feild[column][row] === target) {
        return [+column, +row];
      }
    }
  }
}

function getMinWay(feild, start, end) {
  const n = feild.length;

  return Math.min(
    Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1]),
    Math.abs(end[0] - start[0] + n) + Math.abs(end[1] - start[1]),
    Math.abs(end[0] - start[0] + n) + Math.abs(end[1] - start[1] + n),
    Math.abs(end[0] - start[0] - n) + Math.abs(end[1] - start[1]),
    Math.abs(end[0] - start[0] - n) + Math.abs(end[1] - start[1] - n),
    Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1] + n),
    Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1] - n),
    Math.abs(end[0] - start[0] + n) + Math.abs(end[1] - start[1] - n),
    Math.abs(end[0] - start[0] - n) + Math.abs(end[1] - start[1] + n),
  );
}
