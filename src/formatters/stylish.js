import _ from 'lodash';

const signs = {
  added: '+ ',
  removed: '- ',
  unchanged: '  ',
};

const indent = (spacesCount) => ' '.repeat(spacesCount);

const stringify = (data, depth, space) => {
  if (!_.isObject(data)) {
    return data;
  }

  const fields = Object.entries(data)
    .map(
      ([key, value]) => `${indent((depth + 1) * space)}${key}: ${stringify(
        value,
        depth + 1,
        space,
      )}`,
    )
    .join('\n');

  return `{\n${fields}\n${indent(depth * space)}}`;
};

const stylishFormat = {
  root: ({ children }, depth, space, stylish) => {
    const fields = children
      .flatMap((node) => stylishFormat[node.type](node, depth + 1, space, stylish))
      .join('\n');

    return `{\n${fields}\n}`;
  },

  object: ({ key, children }, depth, space, stylish) => {
    const fields = children
      .flatMap((node) => stylishFormat[node.type](node, depth + 1, space, stylish))
      .join('\n');

    return `${indent(depth * space)}${key}: {\n${fields}\n${indent(
      depth * space,
    )}}`;
  },

  added: ({ key, value }, depth, space) => `${indent(depth * space - signs.added.length)}${
    signs.added
  }${key}: ${stringify(value, depth, space)}`,

  removed: ({ key, value }, depth, space) => `${indent(depth * space - signs.removed.length)}${
    signs.removed
  }${key}: ${stringify(value, depth, space)}`,

  changed: ({ key, value1, value2 }, depth, space) => {
    const field1 = `${indent(depth * space - signs.removed.length)}${
      signs.removed
    }${key}: ${stringify(value1, depth, space)}`;
    const field2 = `${indent(depth * space - signs.added.length)}${
      signs.added
    }${key}: ${stringify(value2, depth, space)}`;

    return [field1, field2];
  },

  unchanged: ({ key, value }, depth, space) => `${indent(depth * space - signs.unchanged.length)}${
    signs.unchanged
  }${key}: ${stringify(value, depth, space)}`,
};

const stylish = (node, depth, space) => stylishFormat[node.type](node, depth, space, stylish);
const makeStylish = (diff) => stylish(diff, 0, 4);

export default makeStylish;
