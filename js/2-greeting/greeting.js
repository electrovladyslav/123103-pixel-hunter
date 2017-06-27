import showScreen from '../misc/functions/showScreen';
import GreetingView from './GreetingView';
import nextModule from '../3-rules/rules';
import moduleFooter from '../footer/footer';
import moduleHeader from '../header/header';

const greeting = new GreetingView();
greeting.switchToNextScreen = () => {
  showScreen(moduleHeader(), nextModule(), moduleFooter());
};

export default () => greeting.element;
