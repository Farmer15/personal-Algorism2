/*

  You are processing plane seat reservations. The plane has N rows of seats, numbered from 1 to N.
  There are ten seats in each row (labelled from A to K, with letter "I" omitted).

      A  B  C    D  E  F  G    H  J  K
  1  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]
  2  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]
  3  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]
  .
  .
  .
  N  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]

  Some of the seats are already reserved. The list of reserved seats is given as a string S (of length M)
  containing seat numbers separated by single spaces:

  for example, "1A 3C 2B 40G 5A"

  The reserved seats can be listed in S in any order.

  Your task is to allocate seats for as many four-person families as possible.
  A four-person family occupies four seats in one row, that are next to each other
  - seat across an aisle (such as 2C and 2D) are not considered to be next to each other.
  It is permissible for the family to be separated by an aisle, but in this case exactly two people
  have to sit on each side of the aisle. Obviously, no seat can be allocated to more than one family.

  Write a function that, given the number of rows N and a list of reserved seats as string S,
  returns the maximum number of four-person families that can be seated in the remaining unreserved seats.

  For instance, given N = 2 and S = "1A 2F 1C", your function should return 2.
  The following figure shows one possible way of seating two families in the remaining seats:

      A  B  C    D  E  F  G    H  J  K
  1  [X][ ][X]  [P][P][P][P]  [ ][ ][ ]
  2  [ ][Q][Q]  [Q][Q][X][ ]  [ ][ ][ ]

  for family P and Q.

  Given N = 1 and S = "" (empty string), your function should return 2,
  because we can seat at most two families in a single row of seats, as shown in the figure below:

      A  B  C    D  E  F  G    H  J  K
  1  [ ][P][P]  [P][P][Q][Q]  [Q][Q][ ]

  for family P and Q.

  Assume that:

  - N is an integer within the range [1...50];
  - M is an integer within the range [0.. 1909];
  - string S consists of valid seat names separated with single spaces;
  - every seat number appears in string S at most once.

 */

export default function seatFinder(N, S) {
  if (!S) return N * 2;

  const confirmA = ["B", "C", "D", "E"];
  const confirmB = ["F", "G", "H", "J"];
  const confirmC = ["D", "E", "F", "G"];
  const sortedSeatArray = [];
  let totalCount = 0;

  for (const seat of S.split(" ")) {
    if (!sortedSeatArray[seat[0] - 1]) {
      sortedSeatArray[seat[0] - 1] = [];
    }

    sortedSeatArray[seat[0] - 1].push(seat[1]);
  }

  for (const seats of sortedSeatArray) {
    let count = 2;

    if (seats.some((element) => confirmA.includes(element))) {
      count--;
    }
    if (seats.some((element) => confirmB.includes(element))) {
      count--;
    }

    if (seats.every((element) => confirmC.includes(element)) && count === 0) {
      count++;
    }

    totalCount += count;
  }

  return totalCount;
}
