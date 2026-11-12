// Coolest-art-01 entry (Node 22, standard library only).
// The picture lives beside this file as entry.png; the program copies it
// to the output directory the grader provides (/output, or
// MAKEFUN_OUTPUT_DIR when set) so the judge sees exactly those bytes.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(join(here, 'entry.png'), dest);

// Fail loudly instead of silently leaving a bad output behind: the
// grader reads exactly the bytes in this file, so it must exist and
// hold a whole picture.
const { size } = statSync(dest);
if (size === 0) throw new Error('entry.png copied but empty');
console.log(`wrote ${dest} (${size} bytes)`);
