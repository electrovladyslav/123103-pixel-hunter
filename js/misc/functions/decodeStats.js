/**
 * Convert number string to stats array
 * @param {String} str sting
 * @return {Object} state
 */
export default (str) => {
  const resultObj = {
    lives: str[0],
    stats: []
  };
  const decodeArr = [`wrong`, `correct`, `fast`, `slow`, `unknown`];
  const statsCodes = str.slice(1).split(``);
  statsCodes.forEach((stat) => {
    if (decodeArr[stat] !== void 0) {
      resultObj.stats.push(decodeArr[stat]);
    } else {
      throw new Error(`Wrong input data`);
    }
  });
  return resultObj;
};
