/**
 * Convert number string to stats array
 * @param {String} str sting
 * @return {Array} stats
 */
export default (str) => {
  const decodeArr = [`wrong`, `correct`, `fast`, `slow`, `unknown`];
  let resultArr = [];
  const strArr = str.split(``);
  strArr.forEach((digit) => {
    if (decodeArr[digit] !== void 0) {
      resultArr.push(decodeArr[digit]);
    } else {
      throw new Error(`Wrong input data`);
    }
  });
  return resultArr;
};
