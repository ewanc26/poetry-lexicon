import { isPoemListItemRecord } from "../src/models/PoemListItem";

describe("PoemListItemRecord validation", () => {
  it("should validate a correct poem list item record", () => {
    const listItem = {
      $type: "uk.ewancroft.anthology.listitem",
      poem: "at://example.com/poem/1",
      list: "at://example.com/list/1",
      createdAt: new Date().toISOString(),
    };
    expect(isPoemListItemRecord(listItem)).toBe(true);
  });

  it("should invalidate a poem list item record with missing poem", () => {
    const listItem = {
      $type: "uk.ewancroft.anthology.listitem",
      // Missing poem
      list: "at://example.com/list/1",
      createdAt: new Date().toISOString(),
    };
    expect(isPoemListItemRecord(listItem)).toBe(false);
  });
});