import StatsView from './StatsView';

export default (game) => {
  const stats = new StatsView(game);
  return stats.element;
};
