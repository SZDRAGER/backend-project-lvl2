import makeStylish from './stylish.js';
import makePlain from './plain.js';

const formatters = {
  stylish: makeStylish,
  plain: makePlain,
  json: JSON.stringify,
};

const outputFormat = (data, type) => {
  const format = formatters[type];
  return format(data);
};
export default outputFormat;
