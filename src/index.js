import { getFileContent, compareObjects } from './utils.js';

const genDiff = (filePath1, filePath2) => {
  const fileContent1 = getFileContent(filePath1);
  const fileContent2 = getFileContent(filePath2);
  return compareObjects(JSON.parse(fileContent1), JSON.parse(fileContent2));
};

export default genDiff;
