import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parser = (data, format) => {
  const parse = parsers[format];
  return parse(data);
};

export default parser;
