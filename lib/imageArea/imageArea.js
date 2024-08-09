/*

  문제 설명은 README를 참고하세요.

 */

export default function imageArea(v) {
  let [areaCount, maxArea] = [0, 0];
  let copiedMap = structuredClone(v);

  v.forEach((rowArray, posY) => {
    rowArray.forEach((_, posX) => {
      const area = changeWhiteToBlack(copiedMap, [posY, posX]);

      area && areaCount++;
      maxArea = Math.max(maxArea, area);
    })
  });

  return [areaCount, maxArea];
}

function changeWhiteToBlack(map, pos) {
  if (!map[pos[0]]?.[pos[1]] || map[pos[0]]?.[pos[1]] === 0) return 0;

  let totalChangeCount = 1;
  map[pos[0]][pos[1]] = 0;

  totalChangeCount += changeWhiteToBlack(map, [pos[0] + 1, pos[1]]);
  totalChangeCount += changeWhiteToBlack(map, [pos[0] - 1, pos[1]]);
  totalChangeCount += changeWhiteToBlack(map, [pos[0], pos[1] + 1]);
  totalChangeCount += changeWhiteToBlack(map, [pos[0], pos[1] - 1]);

  return totalChangeCount;
}
