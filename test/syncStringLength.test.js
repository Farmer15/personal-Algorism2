import { expect } from "chai";
import syncStringLength from "../lib/syncStringLength";

describe("Sync String Length", function () {
  it("should transform the given strings to have the same length.", function () {
    expect(syncStringLength(["AAA", "BBBBB", "CC"])).to.eql([
      "  AAA",
      "BBBBB",
      "   CC",
    ]);
  });

  it("YOUR DESCRIPTION", function () {
    expect(syncStringLength(["A", "BB", "CCCCCCCC"])).to.eql([
      "       A",
      "      BB",
      "CCCCCCCC",
    ]);
    expect(syncStringLength(["A", "B", "C"])).to.eql(["A", "B", "C"]);
    expect(
      syncStringLength([
        "AIERNDFBKNBERDF",
        "BDSFJBNXXFB",
        "CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      ])
    ).to.eql([
      "                      AIERNDFBKNBERDF",
      "                          BDSFJBNXXFB",
      "CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    ]);
  });

  it("테스트 코드 만들기 실험", function () {
    expect(syncStringLength(["VACO", "VVVVAAAACCCCOOOO", "VACOVACO"])).to.eql([
      "            VACO",
      "VVVVAAAACCCCOOOO",
      "        VACOVACO",
    ]);
  });

  it("테스트 코드 만들기 실험2", function () {
    expect(syncStringLength(["V", "AA", "CCC", "OOOO", "VVVVV", "AAAAAA", "CCCCCCC", "OOOOOOOO","VVVVVVVVV", "AAAAAAAAAA", "CCCCCCCCCCC", "OOOOOOOOOOOO"])).to.eql([
      "           V",
      "          AA",
      "         CCC",
      "        OOOO",
      "       VVVVV",
      "      AAAAAA",
      "     CCCCCCC",
      "    OOOOOOOO",
      "   VVVVVVVVV",
      "  AAAAAAAAAA",
      " CCCCCCCCCCC",
      "OOOOOOOOOOOO",
    ]);
  });
});
