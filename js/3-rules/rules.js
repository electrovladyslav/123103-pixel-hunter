import showScreen from '../showScreen';
import RulesView from './RulesView';
import gameLevelModule from '../4-game/gameLevel';
import initialGame from '../initialState';

const rules = new RulesView();
rules.switchToNextScreen = () => {
  showScreen(rules.container, gameLevelModule(initialGame));
};

export default () => rules.element;
