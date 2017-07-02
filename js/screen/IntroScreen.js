import IntroView from '../view/IntroView';
import app from '../main';
import footer from '../footer/footer';
import showScreen from '../misc/functions/showScreen';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    showScreen(this.view.element, footer());

    this.view.switchToNextScreen = () => {
      app.showGreeting();
    };
  }
}

export default new IntroScreen();
