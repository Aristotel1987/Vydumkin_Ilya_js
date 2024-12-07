import { execSync } from 'node:child_process';
const result = String(execSync('node prime_counter.mjs 11')).trim().replace('\n', ' ');
console.assert(result === '5', 'НЕУДАЧА!');