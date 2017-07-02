import GreetingView from '../view/GreetingView';
import App from '../App';
import footer from '../footer/footer';
import showScreen from '../misc/functions/showScreen';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    showScreen(this.view.element, footer());

    this.view.switchToNextScreen = () => {
      App.showRules();
    };
  }
}

export default new GreetingScreen();
