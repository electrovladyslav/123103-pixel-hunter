import showScreen from './misc/functions/showScreen';
import gameLevel from './4-game/gameLevel';

/**
 * Count time for answer, show it on screen  and switch level if time elapse
 * @param {Node} container element in which time will render
 * @param {Object} state object with current state
 * @return {number} intervalId
 */
export default (container, state) => {
  let time = state.questions[state.currentQuestion].time;
  const main = container.closest(`main`);
  let intervalId = setInterval(() => {
    time--;

    if (time <= 0) {
      const newState = Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1
      });
      newState.stats.push(`wrong`);
      newState.lives--;
      showScreen(main, gameLevel(newState));
      clearTimeout(intervalId);

    } else {
      container.innerHTML = time;
      state.questions[state.currentQuestion].time = time;
      if (time <= 5) {
        container.classList.add(`game__timer--blink`);
      }
    }
  }, 1000);
  return intervalId;
};
