import RulesView from '../view/RulesView';
import app from '../main';
import footer from '../footer/footer';
import header from '../header/header';
import showScreen from '../misc/functions/showScreen';

class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    showScreen(header(), this.view.element, footer());

    this.view.switchToNextScreen = () => {
      app.startGame();
    };
  }
}

export default new RulesScreen();
