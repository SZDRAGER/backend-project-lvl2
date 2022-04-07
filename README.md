CLI utility to find the difference between two config files.
## Overview

[![Actions Status](https://github.com/SZDRAGER/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/SZDRAGER/backend-project-lvl2/actions)
[![NodeCI](https://github.com/SZDRAGER/backend-project-lvl2/actions/workflows/NodeCI.yml/badge.svg)](https://github.com/SZDRAGER/backend-project-lvl2/actions/workflows/NodeCI.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/e51a6a03dd2afb5f8018/maintainability)](https://codeclimate.com/github/SZDRAGER/backend-project-lvl2/maintainability)
[![test coverage](https://api.codeclimate.com/v1/badges/e51a6a03dd2afb5f8018/test_coverage)](https://codeclimate.com/github/SZDRAGER/backend-project-lvl2/test_coverage)
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

#### genDiff example for plain JSON files

<a href="https://asciinema.org/a/6V04ZG8mw9EpM2UNv3lx7jDU3" target="_blank"><img src="https://asciinema.org/a/6V04ZG8mw9EpM2UNv3lx7jDU3.svg" /></a>

#### genDiff example for plain YML files

<a href="https://asciinema.org/a/7mqCXrc2degXBZaTo5jhHc3uV" target="_blank"><img src="https://asciinema.org/a/7mqCXrc2degXBZaTo5jhHc3uV.svg" /></a>

#### genDiff example for nested JSON files

<a href="https://asciinema.org/a/19dqLvHdaxh0IakyVPQT6cp1R" target="_blank"><img src="https://asciinema.org/a/19dqLvHdaxh0IakyVPQT6cp1R.svg" /></a>

#### genDiff example for nested YML files

<a href="https://asciinema.org/a/0WL3dG3S0z904mM5Rr9tnEAaN" target="_blank"><img src="https://asciinema.org/a/0WL3dG3S0z904mM5Rr9tnEAaN.svg" /></a>

### Different formats of output:
#### genDiff example of an output using plain format

<a href="https://asciinema.org/a/UE6SHLdPdxMzrRovoocIGIG5i" target="_blank"><img src="https://asciinema.org/a/UE6SHLdPdxMzrRovoocIGIG5i.svg" /></a>

#### genDiff example of an output using plain format

<a href="https://asciinema.org/a/dVPZ2hVQ1TTA0jcTHuMgGajhr" target="_blank"><img src="https://asciinema.org/a/dVPZ2hVQ1TTA0jcTHuMgGajhr.svg" /></a>

#### genDiff example of an output using json format

<a href="https://asciinema.org/a/dVPZ2hVQ1TTA0jcTHuMgGajhr" target="_blank"><img src="https://asciinema.org/a/dVPZ2hVQ1TTA0jcTHuMgGajhr.svg" /></a>