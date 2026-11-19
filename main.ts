// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The entry itself is the X post: a GTA 6 meme, posted from a public account
// with make.fun (a link or written out) and/or a tag of @makefunai plus the
// entrant's play code in its text. This program does the one mechanical job
// the harness needs: it hands the post's address to the gate by copying
// POST.json from the repository root into the output directory.
//
// It runs on Node 22 with the standard library only, and it never touches
// the network. Outside the grader's container the two directories are
// passed in as environment variables:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally they come from the
// environment so the same command works on any machine.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(repoDir, 'POST.json');
const target = join(outDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`No POST.json found in the repository directory: ${repoDir}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(source, target);
  console.log(`POST.json copied to ${target}`);
} catch (err) {
  console.error(`Could not copy POST.json to ${outDir}: ${(err as Error).message}`);
  process.exit(1);
}
