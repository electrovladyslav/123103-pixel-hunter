import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import nextModule from './module-6-game-3';
import levels from './data';
import gameLevelTemplate from './gameLevelTemlate';

const moduleElement = (level) => {
  let node = makeElementFromTemplate(gameLevelTemplate(level));

  const main = document.querySelector(`main`);
  const radio = node.querySelectorAll(`input`);
  [...radio].forEach((item) => {
    item.onchange = () => {
      showScreen(main, nextModule(levels[`level-3`]));
    };
  });


  return node;
};

export default moduleElement;
