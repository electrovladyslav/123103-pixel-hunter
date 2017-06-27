import RulesView from '../3-rules/RulesView';
import App from '../App';
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
      App.showGame();
    };
  }
}

export default new RulesScreen();
