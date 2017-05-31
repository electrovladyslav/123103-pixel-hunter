import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';

import header from './header';
import footer from './footer';
import nextModule from './module-4-game-1';
import startModule from './module-2-greeting';

const moduleElement = () => {
  let node = makeElementFromTemplate(`${header}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer}`);

  const nextTrigger = node.querySelector(`.rules__form`);
  nextTrigger.addEventListener(`submit`, () => {
    showScreen(nextModule());
  });

  const backTrigger = node.querySelector(`.back`);
  backTrigger.addEventListener(`click`, () => {
    showScreen(startModule());
  });

  const rulesInput = node.querySelector(`.rules__input`);
  const rulesButton = node.querySelector(`.rules__button`);

  rulesInput.addEventListener(`input`, () => {
    rulesButton.disabled = !(rulesInput.value);
  });

  return node;
};

export default moduleElement;
