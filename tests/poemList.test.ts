import { isPoemListRecord } from "../src/models/PoemList";

describe("PoemListRecord validation", () => {
  it("should validate a correct poem list record", () => {
    const poem = {
      $type: "uk.ewancroft.anthology.poem",
      licence: "CC BY-SA",
      text: "A simple poem text",
      title: "Simple Poem",
      tags: ["nature"],
      createdAt: new Date().toISOString(),
    };

    const list = {
      $type: "uk.ewancroft.anthology.list",
      listTitle: "Nature Poems",
      groups: [
        {
          tag: "nature",
          items: [poem],
        },
      ],
      createdAt: new Date().toISOString(),
    };

    expect(isPoemListRecord(list)).toBe(true);
  });

  it("should invalidate a poem list record with missing groups", () => {
    const list = {
      $type: "uk.ewancroft.anthology.list",
      listTitle: "Nature Poems",
      // Missing groups
      createdAt: new Date().toISOString(),
    };
    expect(isPoemListRecord(list)).toBe(false);
  });
});