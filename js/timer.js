import showScreen from './showScreen';
import gameLevel from './module-gameLevel';

/**
 * Count time for answer, show it on screen  and switch level if time elapse
 * @param {Node} container element in which time will render
 * @param {Object} game game-object
 * @return {number} intervalId
 */
export default (container, game) => {
  let time = game.questions[game.currentQuestion].time;
  const main = document.querySelector(`main`);
  let intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      const nextGame = Object.assign({}, game, {
        currentQuestion: game.currentQuestion + 1
      });
      nextGame.stats.push(`wrong`);
      nextGame.lives--;
      showScreen(main, gameLevel(nextGame));
      clearTimeout(intervalId);
    } else {
      container.innerHTML = time;
      game.questions[game.currentQuestion].time = time;
      if (time <= 5) {
        container.classList.add(`game__timer--blink`);
      }
    }
  }, 1000);
  return intervalId;
};
