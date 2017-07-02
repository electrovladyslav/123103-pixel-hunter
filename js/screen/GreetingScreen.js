import GreetingView from '../view/GreetingView';
import app from '../main';
import footer from '../footer/footer';
import showScreen from '../misc/functions/showScreen';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    showScreen(this.view.element, footer());

    this.view.switchToNextScreen = () => {
      app.showRules();
    };
  }
}

export default new GreetingScreen();
