import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getDataFromJson = (filepath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8'));

const getDataFromYml = (filepath) => yaml.load(fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8'));

export { getDataFromYml, getDataFromJson };
