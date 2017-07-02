import FinalView from '../view/FinalView';
import showScreen from '../misc/functions/showScreen';
import footer from '../footer/footer';
import header from '../header/header';

class FinalScreen {

  init(state) {
    this.view = new FinalView(state);
    showScreen(header(), this.view.element, footer());
  }
}

export default new FinalScreen();
