import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


async function readFiles() {
    try {
        //the "await" means readFile immediately returns an object that represents a future value
        //Then, later, when the event loop sees that work is done, then we get thaht value.
        //After we get that value, then we continue the execution.
        //The "await" essentially PAUSES this function until the work completes!
        const greet = await readFile(`${__dirname}/greet.txt`, 'utf8');
        console.log(greet);
    } catch(err) {
        console.error('Error:', err);
    }
}

readFiles();
console.log('Done!');