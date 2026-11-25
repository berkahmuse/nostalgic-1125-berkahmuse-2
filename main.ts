// nostalgic-1125-berkahmuse-2
// One childhood memory, written to /output/entry.txt for the make.fun bounty
// "Make the AI Judge Feel Nostalgic: A Childhood Memory".
// Anchor: makefun anchor 389d0ee39450889eaeecc2f6a4248536c7f30da5 round 34271077
import { mkdirSync, writeFileSync } from "node:fs";

// A single sentence (222 characters): a summer evening in grandmother's
// kitchen, the smell of fresh rice, steam on her glasses, a small theft
// she pretended not to see, and the ache of never waiting that way again.
const ENTRY =
  "On summer evenings my grandmother lifted the lid off the rice pot, steam fogging her glasses as she pretended not to see me scraping the crispy bottom with my fingers, and I have never waited for dinner the same way since.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate refuses anything outside 1..280 characters, so check first.
const length = [...ENTRY].length;
if (length < 1 || length > 280) {
  throw new Error(`entry is ${length} characters, outside the 1..280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${length} characters to ${OUTPUT_PATH}`);
