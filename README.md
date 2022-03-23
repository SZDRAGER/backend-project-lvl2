CLI utility to find the difference between two config files.
## Overview

[![Actions Status](https://github.com/SZDRAGER/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/SZDRAGER/backend-project-lvl2/actions)
[![NodeCI](https://github.com/SZDRAGER/backend-project-lvl2/actions/workflows/eslint.yml/badge.svg)](https://github.com/SZDRAGER/backend-project-lvl2/actions/workflows/NodeCI.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/e51a6a03dd2afb5f8018/maintainability)](https://codeclimate.com/github/SZDRAGER/backend-project-lvl2/maintainability)
## Features

- local install as npm package
- package can be used as a library:

  ```
  import genDiff from 'difference-calculator'

  const diff = genDiff(filepath1, filepath2);
  console.log(diff);
  ```

- using [Makefile](https://makefile.site) for better command management
- TDD with Jest
- different input formats (detects by extension): ini, json, y(a)ml
- generates report in plain text, json or "stylish"
- simple and complex (nested) objects comparision

## Dependencies

- [Commander.js](https://github.com/tj/commander.js) for building command-line interface
- [ini](https://github.com/npm/ini) for parsing ini files
- [JS-YAML](https://github.com/nodeca/js-yaml) for parsing y(a)ml files
- some functions from [Lodash](https://github.com/lodash/lodash) to simplify objects comparision

## Install

```
$ git clone ...
$ cd difference-calculator
$ make install
$ make publish
$ npm link
```

## Usage

#### Getting help

```
$ gendiff -h
```

| Option                | Description               |
| :-------------------- | ------------------------- |
| _-V, --version_       | output the version number |
| _-f, --format [type]_ | output format             |
| _-h, --help_          | output usage information  |

#### Two simple **json** files:

```
$ cat "./before.json"
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

```
$ cat "./after.json"
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```

```
$ gendiff "./before.json" "./after.json"
{
 + timeout: 20
 - timeout: 50
 + verbose: true
   host: hexlet.io
 - proxy: 123.234.53.22
 - follow: false
}
```

## Asciinema examples:

#### genDiff example for JSON files

<a href="https://asciinema.org/a/XFwCjgvbYNJjYJLqD9y1I24v9" target="_blank"><img src="https://asciinema.org/a/XFwCjgvbYNJjYJLqD9y1I24v9.svg" /></a>
