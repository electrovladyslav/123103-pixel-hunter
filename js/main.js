import showScreen from './misc/functions/showScreen';
import nextModule from './1-intro/intro';
import footer from './footer/footer';
import constants from './misc/objects/constants';

showScreen(constants.DOM_CENTRAL, nextModule(), footer());
