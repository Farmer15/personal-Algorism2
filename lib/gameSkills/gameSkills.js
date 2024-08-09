/*

  문제 설명은 README를 참고하세요.

 */

export default function gameSkills(skills, boss) {
  const sortedSills = structuredClone(skills).sort((a, b) => a[0] - b[0]);
  let [left, right] = [0, 0];
  let totalSum = sortedSills[0][0];
  let [maxTotalSum, resultLeft, resultRight] = [sortedSills[0][0], 0, 0];

  while (right < skills.length - 1) {
    if (totalSum < boss) {
      right++;
      totalSum += sortedSills[right][0];
    } else {
      totalSum -= sortedSills[left][0];
      left++;
    }

    if (right === left) {
      right++;
      totalSum += sortedSills[right][0];
    }

    if (totalSum >= maxTotalSum && right- left >= resultRight - resultLeft) {
      [maxTotalSum, resultLeft, resultRight] = [totalSum, left, right];
    }
  }

  const maxSillsType = resultRight - resultLeft + 1;
  const minSkillsCount = sortedSills.slice(resultLeft, resultRight + 1).reduceRight((resultCount, skills) => {
    if (maxTotalSum < boss && skills[1] > 1) {
      let count = 1;

      while(count < skills[1]) {
        maxTotalSum += skills[0];
        count++;

        if (maxTotalSum >= boss) {
          break;
        }
      }
      return resultCount + count - 1;
    }

    return resultCount;
  }, maxSillsType);

  return maxTotalSum >= boss ? [maxSillsType, minSkillsCount] : [-1];
}
