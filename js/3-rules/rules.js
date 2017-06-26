import showScreen from '../showScreen';
import RulesView from './RulesView';
import gameLevelModule from '../module-gameLevel';
import initialGame from '../game';
// import nextModule from '../2-greeting/greeting';

const rules = new RulesView();
rules.switchToNextScreen = () => {
  showScreen(rules.container, gameLevelModule(initialGame));
  // showScreen(rules.container, nextModule());
};

export default () => rules.element;
