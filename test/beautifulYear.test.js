import { expect } from "chai";
import getBeautifulYear from "../lib/beautifulYear";

describe("Beautiful Year", function () {
  it("should return the next beautiful year.", function () {
    expect(getBeautifulYear(2015)).to.eql(2016);
    expect(getBeautifulYear(1987)).to.eql(2013);
    expect(getBeautifulYear(9876)).to.eql(10234);
    expect(getBeautifulYear(2198)).to.eql(2301);
    expect(getBeautifulYear(987)).to.eql(1023);
    expect(getBeautifulYear(98)).to.eql(102);
    expect(getBeautifulYear(9)).to.eql(10);
  });

  it("테스트 코드 테스트 : 년도가 음수일 경우", function () {
    expect(getBeautifulYear(-1)).to.eql("옳바른 년도를 입력해주세요.");
    expect(getBeautifulYear(-1235)).to.eql("옳바른 년도를 입력해주세요.");
    expect(getBeautifulYear(-152451)).to.eql("옳바른 년도를 입력해주세요.");
    expect(getBeautifulYear(-1125632)).to.eql("옳바른 년도를 입력해주세요.");
  });

  it("테스트 코드 테스트2 : 년도가 숫자가 아닌경우", function () {
    expect(getBeautifulYear("a")).to.eql("옳바른 년도를 입력해주세요.");
    expect(getBeautifulYear(false)).to.eql("옳바른 년도를 입력해주세요.");
    expect(getBeautifulYear([1,2])).to.eql("옳바른 년도를 입력해주세요.");
    expect(getBeautifulYear({})).to.eql("옳바른 년도를 입력해주세요.");
  });
});
