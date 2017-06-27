import GameView from '../4-game/GamelView';
import App from '../App';
import showScreen from '../misc/functions/showScreen';

export default class GameScreen {
  constructor(state) {
    this.state = state;
    this.view = new GameView(state);
  }

  init() {
    showScreen(this.view.element);

    this.view.onSwitchToNextLevel = () => {
      App.showGame();
    };
  }
}
