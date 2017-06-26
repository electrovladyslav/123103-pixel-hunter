import StatsView from './FinalView';

export default (game) => {
  const stats = new StatsView(game);
  return stats.element;
};
