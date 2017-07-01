export default (state, result) => {
  const newStats = state.stats.slice();
  newStats.push(result);
  return Object.assign({}, state, {
    stats: newStats
  });
};
