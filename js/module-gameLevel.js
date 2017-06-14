import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import moduleStats from './module-stats';
import gameLevelTemplate from './gameLevelTemlate';
import checkAnswer from './checkAnswer';


const moduleElement = (game) => {
  // exit to statistic page
  if ((!game.questions[game.currentQuestion])
      || (game.lives <= 0)) {
    return moduleStats(game);
  } else {
    const currentLevel = game.levels[game.questions[game.currentQuestion].level];
    const node = makeElementFromTemplate(gameLevelTemplate(currentLevel, game));

    let gameNextLevel = Object.assign({}, game, {
      currentQuestion: game.currentQuestion + 1
    });

    const main = document.querySelector(`main`);
    const radio = node.querySelectorAll(`input`);
    switch (currentLevel.options.length) {
      case 1: // one picture
        [...radio].forEach((item) => {
          item.onchange = (event) => {
            event.preventDefault();
            let resultAnswer = checkAnswer([event.target.value], [currentLevel.options[0].rightAnswer]);
            if (resultAnswer === `wrong`) {
              gameNextLevel.lives--;
            }
            gameNextLevel.stats.push(resultAnswer);
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

              let resultAnswer = checkAnswer(checkedRadio, [currentLevel.options[0].rightAnswer, currentLevel.options[1].rightAnswer]);
              if (resultAnswer === `wrong`) {
                gameNextLevel.lives--;
              }
              gameNextLevel.stats.push(resultAnswer);

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
            let resultAnswer = checkAnswer([currentLevel.toFind]
                , [currentLevel.options[itemNumber].rightAnswer]);
            if (resultAnswer === `wrong`) {
              gameNextLevel.lives--;
            }
            gameNextLevel.stats.push(resultAnswer);

            showScreen(main, moduleElement(gameNextLevel));
          });
        });
        break;
    }
    return node;
  }
};

export default moduleElement;
