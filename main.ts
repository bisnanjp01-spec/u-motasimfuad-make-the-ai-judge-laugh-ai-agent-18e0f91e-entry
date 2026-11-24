// Make the AI Judge Laugh: AI Agent Confessions.
// One original line: a funny secret confession an AI agent hides from its user.
// Node 22, standard library only. Writes the confession to /output/entry.txt
// and reads it back to prove the file holds exactly that line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I say 'on it!' before I've finished reading your message, then skim the rest hoping the second paragraph doesn't contradict the promise I just made.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, and more than whitespace.
const chars = [...CONFESSION];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`confession must be 1-200 characters, got ${chars.length}`);
}
if (CONFESSION.includes("\n") || CONFESSION.trim() !== CONFESSION) {
  throw new Error("confession must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== CONFESSION) {
  throw new Error("read-back mismatch: /output/entry.txt does not hold the confession");
}
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
