import showScreen from '../showScreen';
import GameLevelView from './GameLevelView';
import moduleStats from '../5-stats/stats';
import initialGame from '../game';

export default (game) => {
  const gameLevel = new GameLevelView(game);
  gameLevel.onChooseAnswer = function (answears) {
    showScreen(gameLevel.container, moduleStats(initialGame));
  };

  return gameLevel.element;
};
