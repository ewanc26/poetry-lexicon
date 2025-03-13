import { isPoetRecord } from "../src/models/Poet";
import { PoemRecord } from "../src/models/Poem";

describe("PoetRecord validation", () => {
  it("should validate a correct poet record", () => {
    const poem: PoemRecord = {
      $type: "uk.ewancroft.anthology.poem",
      licence: "CC BY-SA",
      text: "A simple poem text",
      title: "Simple Poem",
      tags: ["life", "love"],
      createdAt: new Date().toISOString(),
    };

    const poet = {
      $type: "uk.ewancroft.anthology.poet",
      name: "John Doe",
      biography: "A short biography of John Doe.",
      poems: [poem],
      createdAt: new Date().toISOString(),
    };
    expect(isPoetRecord(poet)).toBe(true);
  });

  it("should invalidate an incorrect poet record", () => {
    const poet = {
      $type: "uk.ewancroft.anthology.poet",
      name: "John Doe",
      // Missing biography
      poems: [],
      createdAt: new Date().toISOString(),
    };
    expect(isPoetRecord(poet)).toBe(false);
  });
});