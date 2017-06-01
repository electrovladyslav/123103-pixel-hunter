import startModule from './module-2-greeting';
import showScreen from './showScreen';

/**
 * Add logic jumping to start screen by clicking to '.back' element
 * @param {Node} node
 */
const addBackToStartScreenLogic = function (node) {
  const backTrigger = node.querySelector(`.back`);
  backTrigger.addEventListener(`click`, () => {
    showScreen(startModule());
  });
};

export default addBackToStartScreenLogic;
