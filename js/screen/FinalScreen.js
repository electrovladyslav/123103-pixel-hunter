import FinalView from '../5-final/FinalView';
import showScreen from '../misc/functions/showScreen';
import footer from '../footer/footer';
import header from '../header/header';

class GameScreen {
  constructor() {
  }

  init(state) {
    this.view = new FinalView(state);
    showScreen(header(), this.view.element, footer());
  }
}

export default new GameScreen();
