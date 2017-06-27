import IntroView from '../1-intro/IntroView';
import App from '../App';
import footer from '../footer/footer';
import showScreen from '../misc/functions/showScreen';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    showScreen(this.view.container, this.view.element, footer());

    this.view.switchToNextScreen = () => {
      App.showGreeting();
    };
  }
}

export default new IntroScreen();
