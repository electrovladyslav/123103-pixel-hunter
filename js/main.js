import showScreen from './showScreen';
import nextModule from './module-4-game-1';
import moduleHeader from './module-header';
import moduleFooter from './module-footer';
import levels from './data';


const central = document.querySelector(`.central`);
showScreen(central, moduleHeader(), nextModule(levels[`level-1`]), moduleFooter);
