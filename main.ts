// Monday, Reviewed in One Line entry (Node 22, standard library only):
// writes one line, 145 characters, a one-line review of the entrant's
// own Monday, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The review: Monday as an unannounced houseguest who ate the motivation,
// left the dishes, and still expects five stars — answered with a
// one-star review and a refusal to Monday again. Concrete Monday details
// (motivation, dishes), a review-format punchline, and a repeatable line.
// Verified by running the program: the output is exactly 145 characters,
// one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'Monday showed up unannounced, ate all my motivation, left the dishes in the sink, and still expects five stars. One star. Would not Monday again.',
);

// Revision note: program re-run after the wording revision; output
// verified again at exactly 145 characters, one line, within the 1-200
// character gate.
