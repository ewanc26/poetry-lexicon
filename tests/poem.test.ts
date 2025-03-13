import { isPoemRecord } from "../src/models/Poem";

describe("PoemRecord validation", () => {
  it("should validate a correct poem record", () => {
    const poem = {
      $type: "uk.ewancroft.anthology.poem",
      licence: "CC BY-SA",
      text: "A simple poem text",
      title: "Simple Poem",
      tags: ["life", "love"],
      createdAt: new Date().toISOString(),
    };
    expect(isPoemRecord(poem)).toBe(true);
  });

  it("should invalidate an incorrect poem record", () => {
    const poem = {
      $type: "uk.ewancroft.anthology.poem",
      licence: "CC BY-SA",
      text: "A simple poem text",
      // Missing title
      tags: ["life", "love"],
      createdAt: new Date().toISOString(),
    };
    expect(isPoemRecord(poem)).toBe(false);
  });
});
