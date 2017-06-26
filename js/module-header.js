import makeElementFromTemplate from './misc/functions/makeElementFromTmeplate.js';
import startModule from './module-2-greeting';
import moduleFooter from './module-footer';
import showScreen from './misc/functions/showScreen';

const moduleHeader = () => {
  let node = makeElementFromTemplate(`
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>
  `);

  const central = document.querySelector(`.central`);
  const backTrigger = node.querySelector(`.back`);
  backTrigger.addEventListener(`click`, () => {
    showScreen(central, startModule(), moduleFooter());
  });

  return node;
};


export default moduleHeader;
