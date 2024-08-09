import { expect } from "chai";
import infiniteString from "../lib/infiniteString";

describe("Infinite String", function () {
  it("should pass base cases", function () {
    expect(infiniteString("ABC", "BCA")).to.eql(false);
    expect(infiniteString("AB", "ABAB")).to.eql(true);
  });

  it("should pass base cases2", function () {
    expect(infiniteString("AAA", "AAAAAAAA")).to.eql(true);
    expect(infiniteString("BB", "BBB")).to.eql(true);
    expect(infiniteString("CCCCC", "CC")).to.eql(true);
  });
});
