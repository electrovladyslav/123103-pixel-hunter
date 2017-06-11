import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import moduleStats from './module-stats';
import gameLevelTemplate from './gameLevelTemlate';

const moduleElement = (game) => {
  if (!game.questions[game.currentQuestion]) {
    return moduleStats(game);
  } else {
    const currentLevel = game.levels[game.questions[game.currentQuestion].level];
    const gameNextLevel = Object.assign({}, game, {
      currentQuestion: game.currentQuestion + 1
    });

    const node = makeElementFromTemplate(gameLevelTemplate(currentLevel));

    const main = document.querySelector(`main`);
    const radio = node.querySelectorAll(`input`);
    switch (currentLevel.options.length) {
      case 1: // one picture
        [...radio].forEach((item) => {
          item.onchange = (event) => {
            event.preventDefault();
            showScreen(main, moduleElement(gameNextLevel));
          };
        });
        break;

      case 2:
        [...radio].forEach((item) => {
          item.addEventListener(`change`, (event) => {
            event.preventDefault();
            if ((radio[0].checked || radio[1].checked)
              && (radio[2].checked || radio[3].checked)) {
              showScreen(main, moduleElement(gameNextLevel));
            }
          });
        });
        break;

      case 3:
        const nextTrigger = node.querySelectorAll(`.game__option`);

        [...nextTrigger].forEach((item) => {
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            showScreen(main, moduleElement(gameNextLevel));
          });
        });
        break;
    }
    return node;
  }
};

export default moduleElement;
