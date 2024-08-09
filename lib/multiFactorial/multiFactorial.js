/*

  문제 설명은 README를 참고하세요.

 */

export default function multiFactorial(m_factorial) {
  const m_factorialArray = m_factorial.split("!");
  const ExclamationCount = m_factorialArray.length - 1;
  const number = +m_factorialArray[0];

  return number > 0 ? number * multiFactorial(number - ExclamationCount + "!".repeat(ExclamationCount)) : 1;
}
