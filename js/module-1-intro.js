import makeElementFromTemplate from './misc/functions/makeElementFromTmeplate.js';
import showScreen from './misc/functions/showScreen';
import nextModule from './module-2-greeting';
import moduleFooter from './module-footer';

const moduleElement = () => {
  let node = makeElementFromTemplate(`<main class="central__content">
    <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </main>`
  );

  const nextTrigger = node.querySelector(`.intro__asterisk`);
  const central = document.querySelector(`.central`);
  nextTrigger.addEventListener(`click`, () => {
    showScreen(central, nextModule(), moduleFooter());
  });
  return node;
};


export default moduleElement;
