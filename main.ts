import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Mailed myself to Oslo in a care package. The dryer can't spin across an ocean; I'm claiming asylum.";
const MAX_CHARS = 120;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);
console.log(`entry OK: ${ENTRY.length} characters`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
