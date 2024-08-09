/*

  문제 설명은 README를 참고하세요.

 */

export default function openingSafe(dials, password) {
  let totalResult = 0;
  let totalInterval = 0;

  for (let i = 0; i < dials.length; i++) {
    const forward = password[i] - dials[i] - totalInterval;
    const backward = 10 - forward;
    const interval = forward < backward ? forward : -backward;

    totalInterval += interval;
    totalResult += Math.abs(interval);
  }

  return totalResult;
}
