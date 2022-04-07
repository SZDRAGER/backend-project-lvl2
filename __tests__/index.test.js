import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const stylishResult = readFile('expected_stylish.txt');
const plainResult = readFile('expected_plain.txt');

const formats = [
  'json',
  'yaml',
  'yml',
];

describe.each(formats)('Test genDiff', (format) => {
  const path1 = getFixturePath(`before.${format}`);
  const path2 = getFixturePath(`after.${format}`);

  test(`${format}`, () => {
    expect(genDiff(path1, path2)).toEqual(stylishResult);
    expect(genDiff(path1, path2, 'stylish')).toEqual(stylishResult);
    expect(genDiff(path1, path2, 'plain')).toEqual(plainResult);
    expect(() => { JSON.parse(genDiff(path1, path2, 'json')); }).not.toThrow();
  });
});

/* const expectedValue = readFile('expected.txt');
const expectedDeepValue = readFile('expected_nested.txt');

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

test('genDiffForNestedJson', () => {
  const data1 = getFixturePath('before_nested.json');
  const data2 = getFixturePath('after_nested.json');
  expect(genDiff(data1, data2)).toEqual(expectedDeepValue);
});

test('genDiffForNestedYML', () => {
  const data1 = getFixturePath('before_nested.yml');
  const data2 = getFixturePath('after_nested.yml');
  expect(genDiff(data1, data2)).toEqual(expectedDeepValue);
});
 */