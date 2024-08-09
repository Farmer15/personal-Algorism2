import { expect } from "chai";
import stringCycle from "../lib/stringCycle/stringCycle";

describe("String Cycle", function () {
  it("should pass base cases", function () {
    expect(stringCycle("abababab")).to.eql(2);
    expect(stringCycle("abcabcabd")).to.eql(9);
  });

  it("should pass base cases2", function () {
    expect(stringCycle("abadabad")).to.eql(4);
    expect(stringCycle("aaaaaaaa")).to.eql(1);
    expect(stringCycle("abaabaaba")).to.eql(3);
    expect(stringCycle("aaaaaab")).to.eql(7);
    expect(stringCycle("aabbcaabbbc")).to.eql(11);
    expect(stringCycle("ab".repeat(10000))).to.eql(2);
    expect(stringCycle("")).to.eql(0);
  });
});
