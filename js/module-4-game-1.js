import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';

import gameLevels from './data';
import nextModule from './module-5-game-2';
const moduleElement = () => {
  let node = makeElementFromTemplate(`
  <main>
  <div class="game">
    <p class="game__task">${gameLevels[0].task}</p>
    <form class="game__content">
       ${gameLevels[0].options.map((optionItem, optionNumber) => {
         return `<div class="game__option">
          <img src="${optionItem.imgSrc}" alt="Option ${optionNumber + 1}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="${optionItem.name}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="${optionItem.name}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`;
       }).join(``)}
      
    </form>
    <div class="stats">
      <ul class="stats">
        ${gameLevels[0].stats.map((statsItem) => {
          return `<li class="stats__result stats__result--${statsItem}"></li>`;
        }).join(``)}
      </ul>
    </div>
  </div>
  </main>
  `);

  const radio = node.querySelectorAll(`input`);
  const main = node.querySelector(`main`);
  [...radio].forEach((item) => {
    item.addEventListener(`change`, () => {
      if ((radio[0].checked || radio[1].checked)
        && (radio[2].checked || radio[3].checked)) {
        showScreen(main, nextModule());
      }
    });
  });

  return node;
};

export default moduleElement;
