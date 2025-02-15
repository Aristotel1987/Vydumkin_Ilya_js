import { hash } from 'node:crypto';
import { createHash } from 'node:crypto';
import { bench, run } from 'mitata';
bench('crypto.hash', async () => {
    hash('sha1', String (Math. random()));
});
bench('crypto.createHash', async () => {
    createHash( 'sha1').update(String(Math.random())).digest ('hex');
});
run();