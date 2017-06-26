import GameLevelView from './GameLevelView';
import finalModule from '../5-final/final';

import checkAnswers from '../misc/functions/checkAnswer';
import decreaseLife from '../misc/functions/decreaseLife';
import addResultToState from '../misc/functions/addResultToStats';
import constant from '../misc/objects/constants.js';

export default (state) => {
  if ((!state.questions[state.currentQuestion])
    || (state.lives <= 0)) {
    return finalModule(state);
  }

  const gameLevel = new GameLevelView(state);

  gameLevel.onChooseAnswers = (chosenAnswers, rightAnswers) => {
    clearTimeout(gameLevel.intervalId);
    const result = checkAnswers(chosenAnswers, rightAnswers, gameLevel.time);
    let newState = state;
    if (result === `wrong`) {
      newState = decreaseLife(state);
    }
    newState = addResultToState(newState, result);

    gameLevel.switchToNextLevel(newState);
  };

  gameLevel.startTime = (state) => {
    gameLevel.timerContainer = gameLevel.element.querySelector(`.game__timer`);
    gameLevel.time = constant.TIME;

    gameLevel.intervalId = setInterval(() => {
      gameLevel.time--;

      if (gameLevel.time <= 0) {
        let newState = state;
        newState = addResultToState(newState, `wrong`);
        newState = decreaseLife(newState);
        gameLevel.switchToNextLevel(newState);
        clearTimeout(gameLevel.intervalId);

      } else {
        gameLevel.timerContainer.innerHTML = gameLevel.time;
        if (gameLevel.time <= 5) {
          gameLevel.timerContainer.classList.add(`game__timer--blink`);
        }
      }
    }, 1000);
  };

  gameLevel.startTime(state);

  return gameLevel.element;
}
