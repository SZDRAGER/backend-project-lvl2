import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
/* const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
  Maybe neeeded later
*/

const expectedValue = () => `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

test('genDiffForJson', () => {
  const data1 = getFixturePath('before.json');
  const data2 = getFixturePath('after.json');
  expect(genDiff(data1, data2)).toEqual(expectedValue());
});

test('genDiffForYml', () => {
  const data1 = getFixturePath('before.yml');
  const data2 = getFixturePath('after.yml');
  expect(genDiff(data1, data2)).toEqual(expectedValue());
});
