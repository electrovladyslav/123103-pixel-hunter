import showScreen from './showScreen';
import nextModule from './module-1-intro';
import moduleFooter from './module-footer';

const central = document.querySelector(`.central`);
showScreen(central, nextModule(), moduleFooter());

