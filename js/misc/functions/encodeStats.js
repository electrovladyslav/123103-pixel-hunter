import codingMap from '../objects/codingMap';
/**
 * Convert array with stats to number string
 * @param {Array} stats
 * @return {String} encoded sting
 */
export default (stats) => {
  let resultStr = ``;
  stats.forEach((stat) => {
    if (codingMap[stat] !== void 0) {
      resultStr += codingMap[stat];
    } else {
      throw new Error(`Wrong input data`);
    }
  });
  return resultStr;
};
