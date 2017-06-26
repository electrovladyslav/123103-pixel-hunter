import showScreen from '../showScreen';
import IntroView from './IntroView';
import nextModule from '../2-greeting/greeting';
import moduleFooter from '../footer/footer';


const intro = new IntroView();
intro.switchToNextScreen = () => {
  showScreen(intro.container, nextModule(), moduleFooter());
};

export default () => intro.element;
