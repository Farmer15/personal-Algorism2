/*

  문제 설명은 README를 참고하세요.

 */

export default function creditCardNumber(card_numbers) {
  return card_numbers.map((card_number) => {
    const cardNumberArray = card_number.split("-");
    const reverseCardNumArray = cardNumberArray.join("").split("").reverse();

    if (!validateCardNumber(cardNumberArray)) return 0

    return Number(reverseCardNumArray.reduce((sum, number, index) => {
      return index % 2 === 0 ? sum + +number : sum + (Math.floor(number * 2 / 10) + (number * 2 % 10));
    }, 0) % 10 === 0);
  });
}

function validateCardNumber(cardNumberArray) {
  const validateCase1 = cardNumberArray.every((number) => number.length === 4 || number.length === 16);
  const validateCase2 = cardNumberArray.length === 1 || cardNumberArray.length === 4;

  return validateCase1 && validateCase2;
}
