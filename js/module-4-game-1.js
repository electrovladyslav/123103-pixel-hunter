import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import nextModule from './module-5-game-2';
import levels from './data';
import gameLevelTemplate from './gameLevelTemlate';

const moduleElement = (level) => {
  let node = makeElementFromTemplate(gameLevelTemplate(level));

  const radio = node.querySelectorAll(`input`);
  const main = document.querySelector(`main`);
  [...radio].forEach((item) => {
    item.addEventListener(`change`, () => {
      if ((radio[0].checked || radio[1].checked)
        && (radio[2].checked || radio[3].checked)) {
        showScreen(main, nextModule(levels[`level-2`]));
      }
    });
  });

  return node;
};

export default moduleElement;
