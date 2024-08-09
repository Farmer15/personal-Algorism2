/*

  문제 설명은 README를 참고하세요.

 */

export default function infiniteMatchingString(s, t) {
  return s.repeat(t.length) === t.repeat(s.length);
}
