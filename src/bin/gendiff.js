#!/usr/bin/env node
import { Command } from "commander";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../../package.json");

const program = new Command();

program
    .version(data.version, '-V, --version')
    .description('Compares two configuration files and shows the difference. Works with .json, .yml and .ini files.')
    .parse(process.argv);