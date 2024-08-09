import { expect } from "chai";
import "../lib/isAnagram";

describe("Is Anagram", function () {
  it("should pass base cases", function () {
    expect("finder".isAnagram("friend")).to.eql(true);
    expect("solver".isAnagram("lovers")).to.eql(true);
    expect("book".isAnagram("boot")).to.eql(false);
  });

  it("should ignore special characters", function () {
    expect("Funeral".isAnagram("Real fun")).to.eql(true);
    expect("React DOM".isAnagram("demo")).to.eql(false);
    expect("School master".isAnagram("The classroom")).to.eql(true);
    expect("its you.".isAnagram("suit yoh!")).to.eql(false);
    expect("Are you study?".isAnagram("your tuesday.")).to.eql(true);
  });

  it("긴 문자열이여도 제대로 작동 돼야 합니다", function () {
    expect("hlloeymemansiocav".isAnagram("Hello my name is vaco")).to.eql(true);
    expect("woh 이 글자는 erayu 무시 되어야 oma 합니다 ienfinkahtuoydnayuo!!!???@!!@$!@".isAnagram("How are you? I am fine thank you and you??")).to.eql(true);
    expect("EllHO~!".repeat(1000000).isAnagram("hello".repeat(1000000))).to.eql(true);
  });
});
