/*

  문제 설명은 README를 참고하세요.

 */

export default function imageArea2(image) {
  const case1Feild = structuredClone(image);
  const case2Feild = structuredClone(image);
  let [countCase1, countCase2] = [0, 0];
  let [column, row] = [0, 0];

  while(column < image.length) {
    countCase1 += IsAreaCase(case1Feild, [column,row], "case1");
    countCase2 += IsAreaCase(case2Feild, [column,row], "case2");

    row++;
    if(row >= image[0].length) {
      column++;
      row = 0;
    }
  }

  return [countCase1, countCase2];
}

function IsAreaCase(feild, [column, row], option) {
  if (!feild[column]?.[row] || feild[column][row] === 0) return 0;

  const nextposArray = option === "case1" ? [
    [column + 1, row],
    [column - 1, row],
    [column, row + 1],
    [column, row - 1],
  ] : [
    [column + 1, row],
    [column - 1, row],
    [column, row + 1],
    [column, row - 1],
    [column + 1, row + 1],
    [column + 1, row - 1],
    [column - 1, row + 1],
    [column - 1, row - 1]
  ];

  feild[column][row] = 0;
  nextposArray.forEach((nextpos) => IsAreaCase(feild, nextpos, option));

  return 1;
}
