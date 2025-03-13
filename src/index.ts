import { isPoemRecord } from "./models/Poem";
import { isPoemListRecord } from "./models/PoemList";
import { isPoemListItemRecord } from "./models/PoemListItem";

console.log("Poetry Lexicon project started.");

// Example poem record
const examplePoem = {
  $type: "uk.ewancroft.anthology.poem",
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
  listTitle: "Favourite Poems",
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

// Example list item record
const exampleListItem = {
  $type: "uk.ewancroft.anthology.listitem",
  poem: "at://example.com/poem/1",
  list: "at://example.com/list/1",
  createdAt: new Date().toISOString(),
};

if (isPoemListItemRecord(exampleListItem)) {
  console.log("Valid poem list item record:", exampleListItem);
} else {
  console.error("Invalid poem list item record");
}
