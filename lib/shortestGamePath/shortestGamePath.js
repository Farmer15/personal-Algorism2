/*

  문제 설명은 README를 참고하세요.

 */

export default function shortestGamePath(maps) {
  let shortestCount;

  movePos(maps, [], [0, 0], 0);

  return shortestCount ?? -1;

  function movePos(maps, pathHistory, currentPos, count) {
    const rightPos = maps[currentPos[1]]?.[currentPos[0] + 1] === 1 ? [currentPos[0] + 1, currentPos[1]] : null;
    const leftPos = maps[currentPos[1]]?.[currentPos[0] - 1] === 1 ? [currentPos[0] - 1, currentPos[1]] : null;
    const upPos = maps[currentPos[1] - 1]?.[currentPos[0]] === 1 ? [currentPos[0], currentPos[1] - 1] : null;
    const downPos = maps[currentPos[1] + 1]?.[currentPos[0]] === 1 ? [currentPos[0], currentPos[1] + 1] : null;

    pathHistory = [...pathHistory, currentPos];
    count++;

    if (currentPos[0] === maps[0].length - 1 && currentPos[1] === maps.length - 1) {
      if (shortestCount > count || !shortestCount) {
        shortestCount = count;
        return;
      }
    }
    const nextPosArray = [rightPos, downPos, upPos, leftPos].filter((element) => {
      return element && !JSON.stringify(pathHistory).includes(element);
    });

    if (nextPosArray.length !== 0) {
      for (const nextPos of nextPosArray) {
        movePos(maps, pathHistory, nextPos, count);
      }
    }
  }
}
