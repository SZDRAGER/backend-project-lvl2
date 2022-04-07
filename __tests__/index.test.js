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
const jsonResult = readFile('expected_json.txt');

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
    expect(genDiff(path1, path2, 'json')).toEqual(jsonResult);
    expect(() => { JSON.parse(genDiff(path1, path2, 'json')); }).not.toThrow();
  });
});
