import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import addBackToStartScreenLogic from './addBackToStartScreenLogic';

import header from './header';
import footer from './footer';
import data from './data';
import nextModule from './module-5-game-2';

const moduleElement = () => {
  let node = makeElementFromTemplate(`${header}
  <div class="game">
    <p class="game__task">${data[0].task}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${data[0].optionsSrc[0]}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${data[0].optionsSrc[1]}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${data[0].stats.map((statsItem) => {
          return `<li class="stats__result stats__result--${statsItem}"></li>`;
        }).join(``)}
      </ul>
    </div>
  </div>
  ${footer}`);

  const radio = node.querySelectorAll(`input`);

  [...radio].forEach((item) => {
    item.addEventListener(`change`, () => {
      if ((radio[0].checked || radio[1].checked)
        && (radio[2].checked || radio[3].checked)) {
        showScreen(nextModule());
      }
    });
  });

  addBackToStartScreenLogic(node);

  return node;
};

export default moduleElement;
