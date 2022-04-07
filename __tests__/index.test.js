import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedValue = readFile('expected.txt');
const expectedDeepValue = readFile('deep_expected.txt');

test('genDiffForJson', () => {
  const data1 = getFixturePath('before.json');
  const data2 = getFixturePath('after.json');
  expect(genDiff(data1, data2)).toEqual(expectedValue);
});

test('genDiffForYml', () => {
  const data1 = getFixturePath('before.yml');
  const data2 = getFixturePath('after.yml');
  expect(genDiff(data1, data2)).toEqual(expectedValue);
});

test('genDiffForDeepJson', () => {
  const data1 = getFixturePath('before_deep.json');
  const data2 = getFixturePath('after_deep.json');
  expect(genDiff(data1, data2)).toEqual(expectedDeepValue);
});

test('genDiffForDeepYML', () => {
  const data1 = getFixturePath('before_deep.yml');
  const data2 = getFixturePath('after_deep.yml');
  expect(genDiff(data1, data2)).toEqual(expectedDeepValue);
});
