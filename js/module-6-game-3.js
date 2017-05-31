import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import addBackToStartScreenLogic from './addBackToStartScreenLogic';

import header from './header';
import footer from './footer';
import nextModule from './module-7-stats';

const moduleElement = () => {
  let node = makeElementFromTemplate(`${header}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
    </div>
    ${footer}`);


  const nextTrigger = node.querySelectorAll(`.game__option`);

  [...nextTrigger].forEach((item) => {
    item.addEventListener(`click`, () => {
      showScreen(nextModule());
    });
  });

  addBackToStartScreenLogic(node);

  return node;
};

export default moduleElement;
