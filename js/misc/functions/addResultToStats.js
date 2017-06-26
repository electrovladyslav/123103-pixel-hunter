export default (state, result) => {
  const newStats = state.stats;
  newStats.push(result);
  return Object.assign({}, state, {
    stats: newStats
  })
};
