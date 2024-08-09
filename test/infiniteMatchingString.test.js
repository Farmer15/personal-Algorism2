import { expect } from "chai";
import infiniteMatchingString from "../lib/infiniteMatchingString/infiniteMatchingString";

describe("Infinite Matching String", function () {
  it("should pass base cases", function () {
    expect(infiniteMatchingString("ABC", "BCA")).to.eql(false);
    expect(infiniteMatchingString("AB", "ABAB")).to.eql(true);
  });

  it("should pass base cases2", function () {
    expect(infiniteMatchingString("V", "VVV")).to.eql(true);
    expect(infiniteMatchingString("VAVAVA", "VA")).to.eql(true);
    expect(infiniteMatchingString("VAVAVA", "AVAV")).to.eql(false);
    expect(infiniteMatchingString("VAVAVA", "VAVA")).to.eql(true);
    expect(infiniteMatchingString("", "")).to.eql(true);
  });
});
