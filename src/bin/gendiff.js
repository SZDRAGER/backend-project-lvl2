#!/usr/bin/env node
import { Command } from 'commander';
import { createRequire } from 'module';
import genDiff from '../index.js';

const require = createRequire(import.meta.url);
const data = require('../../package.json');

const program = new Command();

program
  .version(data.version, '-V, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    console.log(genDiff(filePath1, filePath2, program.opts().format));
  })
  .parse(process.argv);
