import GameLevelView from './GameLevelView';
import finalModule from '../5-final/final';

import showScreen from '../showScreen';
import checkAnswers from '../checkAnswer';
import decreaseLife from '../misc/decreaseLife';
import addResultToState from '../misc/addResultToStats';

export default function level(state) {
  if ((!state.questions[state.currentQuestion])
    || (state.lives <= 0)) {
    return finalModule(state);
  }
  const gameLevel = new GameLevelView(state);
  gameLevel.onChooseAnswers = function (chosenAnswers, rightAnswers) {
    const result = checkAnswers(chosenAnswers, rightAnswers, 30);
    let newState = state;
    if (result === `wrong`) {
      newState = decreaseLife(state);
    }
    newState = addResultToState(newState, result);

    showScreen(gameLevel.container, level(Object.assign({}, newState, {
      currentQuestion: state.currentQuestion + 1
    })));
  };

  return gameLevel.element;
}
