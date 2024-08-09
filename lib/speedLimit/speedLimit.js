/*

  문제 설명은 README를 참고하세요.

 */

export default function speedLimit(speed_limit, cameras) {
  return cameras.reduce((limitCount, [currentCameraPos, currentTime], index) => {
    const [prevCameraPos , prevtime] = cameras[index - 1] ?? [0, 0];

    return (currentCameraPos - prevCameraPos) / (currentTime - prevtime) > speed_limit ? limitCount + 1 : limitCount;
  }, 0);
}
