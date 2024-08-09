import { expect } from "chai";
import connectingLetters from "../lib/connectingLetters";

describe("Connecting letters", function () {
  it("should pass base cases", function () {
    expect(
      connectingLetters([
        ["A", "B", "T", "T", "T"],
        ["T", "C", "D", "E", "T"],
        ["T", "T", "T", "F", "T"],
        ["B", "A", "H", "G", "F"],
        ["C", "D", "E", "F", "G"],
      ])
    ).to.eql(15);
  });

  it("should pass base cases2", function () {
    expect(
      connectingLetters([
        ["A", "B", "C", "D", "E"],
        ["P", "Q", "R", "S", "F"],
        ["O", "X", "Y", "T", "G"],
        ["N", "W", "V", "U", "H"],
        ["M", "L", "K", "J", "I"]
      ])
    ).to.eql(25);

    expect(
      connectingLetters([
        ["A", "B", "B", "B", "B", "A"],
        ["A", "B", "A", "A", "B", "A"],
        ["A", "B", "A", "A", "B", "A"],
        ["A", "B", "A", "A", "B", "A"],
        ["A", "B", "A", "A", "B", "A"],
        ["A", "B", "A", "A", "B", "A"],
        ["A", "B", "A", "A", "B", "A"],
        ["A", "B", "B", "B", "B", "A"],
      ])
    ).to.eql(4);

    expect(
      connectingLetters([
        ["A", "B", "C", "C", "B", "A"],
        ["A", "B", "D", "A", "B", "A"],
        ["A", "B", "E", "A", "B", "A"],
        ["A", "B", "F", "A", "B", "A"],
        ["A", "B", "G", "A", "B", "C"],
        ["A", "B", "F", "A", "B", "D"],
        ["A", "B", "E", "A", "B", "E"],
        ["A", "B", "D", "H", "G", "F"],
        ["A", "B", "C", "C", "B", "A"],
      ])
    ).to.eql(15);
  });
});
