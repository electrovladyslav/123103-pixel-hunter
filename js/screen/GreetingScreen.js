import GreetingView from '../2-greeting/GreetingView';
import App from '../App';
import footer from '../footer/footer';
import showScreen from '../misc/functions/showScreen';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    showScreen(this.view.container, this.view.element, footer());

    this.view.switchToNextScreen = () => {
      App.showGame();
    };
  }
}

export default new GreetingScreen();
