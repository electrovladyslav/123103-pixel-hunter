import FinalView from '../5-final/FinalView';
import App from '../App';
import showScreen from '../misc/functions/showScreen';

export default class GameScreen {
  constructor(state) {
    this.state = state;
    this.view = new FinalView(state);
  }

  init() {
    showScreen(this.container, this.view);

    this.view.onSwitchToNextLevel = () => {
      App.showGame();
    };
  }
}
