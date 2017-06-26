import showScreen from '../showScreen';
import GameLevelView from './GameLevelView';
import moduleStats from '../5-stats/stats';
import initialGame from '../game';

const gameLevel = new GameLevelView();
gameLevel.onChooseAnswer = function (answears) {
  showScreen(gameLevel.container, moduleStats(initialGame));
};

export default () => gameLevel.element;
