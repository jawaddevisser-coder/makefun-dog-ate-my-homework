import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My dog didn't eat my homework — he read it, found three plot holes, and filed a formal complaint with my teacher.";
const LIMIT = 200;

if (EXCUSE.length === 0 || EXCUSE.length > LIMIT) {
  throw new Error(`excuse must be 1..${LIMIT} chars, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.trim() !== EXCUSE) {
  throw new Error("excuse must be a single line with no leading/trailing space");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`excuse written: ${EXCUSE.length} chars`);
