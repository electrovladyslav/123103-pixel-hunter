import showScreen from './showScreen';
import gameLevel from './module-gameLevel';

export default (container, game) => {
  let time = game.questions[game.currentQuestion].time;
  const main = document.querySelector(`main`);
  let timerId = setInterval(() => {
    time--;
    if (time <= 0) {
      const nextGame = Object.assign({}, game, {
        currentQuestion: game.currentQuestion + 1
      });
      nextGame.stats.push(`wrong`);
      nextGame.lives--;
      showScreen(main, gameLevel(nextGame));
      clearTimeout(timerId);
    } else {
      container.innerHTML = time;
    }
  }, 1000);
};
