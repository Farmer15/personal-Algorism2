import { expect } from "chai";
import antSequence from "../lib/antSequence";

describe("Ant Sequence", function () {
  it("should generate nth sequence number", function () {
    expect(antSequence(1)).to.eql("1");
    expect(antSequence(5)).to.eql("122111");
    expect(antSequence(6)).to.eql("112213");
  });

  it("음수나 숫자가 아닌 다른 원시값이 올 경우 early return 시켜주어야한다", function () {
    expect(antSequence(-1)).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence(-1000)).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence(true)).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence({})).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence([])).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence("hi~~!")).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence(null)).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence(undefined)).to.eql("양의 정수가 들어와야합니다");
    expect(antSequence(NaN)).to.eql("양의 정수가 들어와야합니다");
  });
});
