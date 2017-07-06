import codingMap from '../objects/codingMap';
/**
 * Convert array with stats to number string
 * @param {Object} state with fileds lives and stats
 * @return {String} encoded sting
 */
export default (state) => {
  let resultStr = ``;
  state.stats.forEach((stat) => {
    if (codingMap[stat] !== void 0) {
      resultStr += codingMap[stat];
    } else {
      throw new Error(`Wrong input data`);
    }
  });
  resultStr = state.lives + resultStr;
  return resultStr;
};
