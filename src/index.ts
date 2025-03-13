import { isPoemRecord } from "./models/Poem";
import { isPoemListRecord } from "./models/PoemList";

console.log("Poetry Lexicon project started.");

// Example poem record
const examplePoem = {
  $type: "uk.ewancroft.anthology.poem",
  $rkey: "poem1",
  $did: "did:example:123",
  licence: "CC BY-SA",
  text: "Roses are red, violets are blue.",
  title: "Simple Poem",
  tags: ["nature", "love"],
  createdAt: new Date().toISOString(),
};

if (isPoemRecord(examplePoem)) {
  console.log("Valid poem record:", examplePoem);
} else {
  console.error("Invalid poem record");
}

// Example list record that groups poems by tag
const exampleList = {
  $type: "uk.ewancroft.anthology.list",
  $rkey: "list1",
  $did: "did:example:123",
  listTitle: "Favorite Poems",
  groups: [
    {
      tag: "nature",
      items: [examplePoem],
    },
  ],
  createdAt: new Date().toISOString(),
};

if (isPoemListRecord(exampleList)) {
  console.log("Valid poem list record:", exampleList);
} else {
  console.error("Invalid poem list record");
}
