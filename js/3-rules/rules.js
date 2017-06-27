import showScreen from '../misc/functions/showScreen';
import RulesView from './RulesView';
import gameLevelModule from '../4-game/gameLevel';
import initialGame from '../misc/objects/initialState';
import moduleFooter from '../footer/footer';
import moduleHeader from '../header/header';

const rules = new RulesView();
rules.switchToNextScreen = () => {
  showScreen(moduleHeader(), gameLevelModule(initialGame), moduleFooter());
};

export default () => rules.element;
