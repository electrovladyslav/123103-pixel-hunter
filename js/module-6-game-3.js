import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import nextModule from './module-7-stats';
import gameLevelTemplate from './gameLevelTemlate';


const moduleElement = (level) => {
  let node = makeElementFromTemplate(gameLevelTemplate(level));

  const main = document.querySelector(`main`);
  const nextTrigger = node.querySelectorAll(`.game__option`);

  [...nextTrigger].forEach((item) => {
    item.addEventListener(`click`, () => {
      showScreen(main, nextModule());
    });
  });

  return node;
};

export default moduleElement;
