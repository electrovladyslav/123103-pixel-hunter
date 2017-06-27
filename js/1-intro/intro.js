import showScreen from '../misc/functions/showScreen';
import IntroView from './IntroView';
import nextModule from '../2-greeting/greeting';
import moduleFooter from '../footer/footer';


const intro = new IntroView();
intro.switchToNextScreen = () => {
  showScreen(nextModule(), moduleFooter());
};

export default () => intro.element;
