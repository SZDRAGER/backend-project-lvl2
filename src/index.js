import _ from 'lodash';
import path from 'path';
import { getDataFromYml, getDataFromJson } from './parsers.js';

const compareObjects = (obj1, obj2) => {
  const result = [];
  const keys = _.union(Object.keys(obj2), Object.keys(obj1))
    .sort();

  keys.forEach((key) => {
    const value1 = _.get(obj1, key);
    const value2 = _.get(obj2, key);

    if (value1 === value2) {
      result.push(['  ', `${key}:`, value1]);
    } else if (!_.has(obj1, key)) {
      result.push([' +', `${key}:`, value2]);
    } else if (!_.has(obj2, key)) {
      result.push([' -', `${key}:`, value1]);
    } else {
      result.push([' -', `${key}:`, value1]);
      result.push([' +', `${key}:`, value2]);
    }
  });

  return `{
${result.map((e) => e.join(' ')).join('\n')}
}`;
};

const genDiff = (filePath1, filePath2) => {
  const fileContent1 = path.extname(filePath1) === '.json' ? getDataFromJson(filePath1) : getDataFromYml(filePath1);
  const fileContent2 = path.extname(filePath2) === '.json' ? getDataFromJson(filePath2) : getDataFromYml(filePath2);
  return compareObjects(fileContent1, fileContent2); 
};

export { compareObjects };

export default genDiff;
