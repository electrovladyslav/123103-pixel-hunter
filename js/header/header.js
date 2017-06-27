import showScreen from '../misc/functions/showScreen';
import HeaderView from './HeaderView';
import startModule from '../2-greeting/greeting';
import moduleFooter from '../footer/footer';


const header = new HeaderView();
header.backToStart = () => {
  showScreen(startModule(), moduleFooter());
};

export default () => header.element;
