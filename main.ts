import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Exactly two lines: the confession first, then the resolve.
// Line 1 owns one specific mistake; line 2 names the lesson
// and the changed behaviour that follows from it.
const lines = [
  "I'm sorry I printed two hundred copies of the agenda when you asked for two.",
  "I learned to read the number twice, so now I check the count on screen before the printer warms up.",
];
const entry = lines.join("\n");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
