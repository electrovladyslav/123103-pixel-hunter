import showScreen from '../showScreen';
import GameLevelView from './GameLevelView';
import moduleStats from '../module-stats';

const gameLevel = new GameLevelView();
gameLevel.switchToNextLevel = () => {
  showScreen(gameLevel.container, moduleStats({}));
};

export default () => gameLevel.element;
