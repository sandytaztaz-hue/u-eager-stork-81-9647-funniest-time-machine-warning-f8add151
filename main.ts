import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: Do not use to kill your grandfather. Side effects include never existing, which voids your warranty.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex >= 0 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  const equalsFlag = process.argv.find((arg) => arg.startsWith("--output="));
  if (equalsFlag) return equalsFlag.slice("--output=".length);
  return "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
