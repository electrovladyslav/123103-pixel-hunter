import GameView from '../view/GamelView';
import app from '../main';
import footer from '../footer/footer';
import header from '../header/header';
import constants from '../misc/objects/constants';
import initialState from '../misc/objects/initialState';
import addResultToState from '../misc/functions/addResultToStats';
import decreaseLife from '../misc/functions/decreaseLife';
import increaseLevel from '../misc/functions/increaseLevel';
import checkAnswer from '../misc/functions/checkAnswer';
import showScreen from '../misc/functions/showScreen';

class GameScreen {
  init(state = initialState) {
    this.state = state;
    this.view = new GameView(state);
    showScreen(header(), this.view.element, footer());
    this.startTime(state);

    this.view.onChooseAnswers = (chosenAnswers, rightAnswers) => {
      this.stopTime();
      const result = checkAnswer(chosenAnswers, rightAnswers, this.time);
      let newState = this.state;
      if (result === `wrong`) {
        newState = decreaseLife(newState);
      }
      newState = addResultToState(newState, result);

      this.switchToNextLevel(newState);
    };
  }

  switchToNextLevel(state) {
    const newState = increaseLevel(state);
    if ((newState.lives <= 0)
      || (newState.currentQuestion >= newState.questions.length)) {
      app.showStats(newState);
    } else {
      this.init(newState);
    }
  }

  startTime(currentState) {
    this.timerContainer = document.querySelector(`.game__timer`);
    this.time = constants.TIME;
    let newState = currentState;

    this.intervalId = setInterval(() => {
      this.time--;

      if (this.time <= 0) {
        this.stopTime();
        newState = addResultToState(newState, `wrong`);
        newState = decreaseLife(newState);
        this.switchToNextLevel(newState);

      } else {
        this.timerContainer.innerHTML = this.time;
        if (this.time <= 5) {
          this.timerContainer.classList.add(`game__timer--blink`);
        }
      }
    }, 1000);
  }

  stopTime() {
    clearInterval(this.intervalId);
  }

  stopGame() {
    this.stopTime();
  }
}

export default new GameScreen();
