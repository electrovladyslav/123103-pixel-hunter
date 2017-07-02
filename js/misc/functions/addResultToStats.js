/**
 * Adding result to array state.stats
 * @param {Object} state initial object
 * @param {String} result sting to add
 * @return  {Object} new object
 */
export default (state, result) => {
  const newStats = state.stats.slice();
  newStats.push(result);
  return Object.assign({}, state, {
    stats: newStats
  });
};
