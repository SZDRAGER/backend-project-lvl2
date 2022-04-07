/* eslint-disable max-len */
import _ from 'lodash';

const stringifyValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (_.isString(value)) {
    return `'${value}'`;
  }

  return value;
};

const mapping = {
  root: ({ children }, propertyParents, format) => children.flatMap((node) => mapping[node.type](node, propertyParents, format)),
  object: ({ key, children }, propertyParents, format) => children.flatMap((node) => mapping[node.type](node, [...propertyParents, key], format)),
  added: ({ key, value }, propertyParents) => `Property '${[...propertyParents, key].join(
    '.',
  )}' was added with value: ${stringifyValue(value)}`,
  removed: ({ key }, propertyParents) => `Property '${[...propertyParents, key].join('.')}' was removed`,
  changed: ({ key, value1, value2 }, propertyParents) => `Property '${[...propertyParents, key].join(
    '.',
  )}' was updated. From ${stringifyValue(value1)} to ${stringifyValue(
    value2,
  )}`,
  unchanged: () => [],
};

const dataFormat = (node, propertyParents) => mapping[node.type](node, propertyParents, dataFormat);

const makePlain = (diff) => dataFormat(diff, []).join('\n');

export default makePlain;
