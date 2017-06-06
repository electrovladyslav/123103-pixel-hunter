import makeElementFromTemplate from './makeElementFromTmeplate.js';
import showScreen from './showScreen';
import nextModule from './module-3-rules';
import moduleHeader from './module-header';
import moduleFooter from './module-footer';

const moduleElement = () => {
  let node = makeElementFromTemplate(`
  <main class="central__content">
    <div class="greeting central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
        <p>Правила игры просты.<br>
          Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
          Задача кажется тривиальной, но не думай, что все так просто.<br>
          Фотореализм обманчив и коварен.<br>
          Помни, главное — смотреть очень внимательно.</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>
  </main>`);

  const central = document.querySelector(`.central`);
  const nextTrigger = node.querySelector(`.greeting__continue`);
  nextTrigger.addEventListener(`click`, () => {
    showScreen(central, moduleHeader(), nextModule(), moduleFooter());
  });

  return node;
};

export default moduleElement;
