import makeElementFromTemplate from './makeElementFromTmeplate.js';
import startModule from './module-2-greeting';
import showScreen from './showScreen';

const moduleHeader = () => {
  let node = makeElementFromTemplate(`<header class="header">
  <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>`);

  const central = document.querySelector(`.central`);
  const backTrigger = node.querySelector(`.back`);
  backTrigger.addEventListener(`click`, () => {
    showScreen(central, startModule());
  });

  // const main = document.querySelector(`main`);
  // main.appendChild(node);
  // main.insertAdjacentHTML(`beforebegin`, node);

  return node;
};


export default moduleHeader;
