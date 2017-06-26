import showScreen from './misc/functions/showScreen';
import nextModule from './1-intro/intro';
import footer from './footer/footer';

const central = document.querySelector(`.central`);
showScreen(central, nextModule(), footer());
