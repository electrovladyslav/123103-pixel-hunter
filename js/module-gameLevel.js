import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import moduleStats from './module-stats';
import gameLevelTemplate from './gameLevelTemlate';
import checkAnswer from './checkAnswer';


const moduleElement = (game) => {
  if (!game.questions[game.currentQuestion]) {
    return moduleStats(game);
  } else {
    const currentLevel = game.levels[game.questions[game.currentQuestion].level];
    const gameNextLevel = Object.assign({}, game, {
      currentQuestion: game.currentQuestion + 1
    });

    const node = makeElementFromTemplate(gameLevelTemplate(currentLevel, game.stats));

    const main = document.querySelector(`main`);
    const radio = node.querySelectorAll(`input`);
    switch (currentLevel.options.length) {
      case 1: // one picture
        [...radio].forEach((item) => {
          item.onchange = (event) => {
            event.preventDefault();
            gameNextLevel.stats.push(checkAnswer([event.target.value], [currentLevel.options[0].rightAnswer]));
            showScreen(main, moduleElement(gameNextLevel));
          };
        });
        break;

      case 2: // two pictures
        [...radio].forEach((item) => {
          item.addEventListener(`change`, (event) => {
            event.preventDefault();

            if ((radio[0].checked || radio[1].checked)
              && (radio[2].checked || radio[3].checked)) {

              const checkedRadio = [];
              [...radio].forEach((radioItem) => {
                if (radioItem.checked) {
                  checkedRadio.push(radioItem.value);
                }
              });

              gameNextLevel.stats.push(
                  checkAnswer(checkedRadio, [currentLevel.options[0].rightAnswer, currentLevel.options[1].rightAnswer]
                ));

              showScreen(main, moduleElement(gameNextLevel));
            }
          });
        });
        break;

      case 3: // three pictures
        const nextTrigger = node.querySelectorAll(`.game__option`);

        [...nextTrigger].forEach((item, itemNumber) => {
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            gameNextLevel.stats.push(
                checkAnswer([currentLevel.toFind]
                , [currentLevel.options[itemNumber].rightAnswer]));

            showScreen(main, moduleElement(gameNextLevel));
          });
        });
        break;
    }
    return node;
  }
};

export default moduleElement;
