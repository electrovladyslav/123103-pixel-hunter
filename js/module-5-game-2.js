import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';

import header from './header';
import footer from './footer';
import startModule from './module-2-greeting';
import nextModule from './module-6-game-3';

const moduleElement = () => {
  let node = makeElementFromTemplate(`${header}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
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

  const radio = node.querySelectorAll(`input`);

  [...radio].forEach((item) => {
    item.onchange = () => {
      showScreen(nextModule());
    };
  });


  const backTrigger = node.querySelector(`.back`);
  backTrigger.addEventListener(`click`, () => {
    showScreen(startModule());
  });

  return node;
};

export default moduleElement;
