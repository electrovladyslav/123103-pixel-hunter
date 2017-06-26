import AbstractView from '../AbstractView';
import makeElementFromTemplate from '../makeElementFromTmeplate';
import timer from '../timer';

export default class GameLevelView extends AbstractView {
  template(game, level) {
    return `
<div class="game">
  <div class="game__lives">
      ${new Array(game.lives).fill(`<span class="game__live game__live--full"></span>`).join(``)}
      ${new Array(3 - game.lives).fill(`<span class="game__live game__live--empty"></span>`).join(``)}
  </div>
  <p class="game__timer">${game.questions[game.currentQuestion].time}</p>
  <p class="game__task">${level.task}</p>
    
  <form class="game__content ${level.contentWide}">
       
  ${level.options.map((optionItem, optionNumber, options) => {
    let result = `<div class="game__option">
    <img src="${optionItem.imgSrc}" alt="Option ${optionNumber + 1}" width="${optionItem.width}" height="${optionItem.height}">`;

    if (options.length < 3) {  // show answer icons
      result += `<label class="game__answer game__answer--photo">
      <input name="${optionItem.name}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="${optionItem.name}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>`;
    }

    result += `</div>`;

    return result;
  }).join(``)}
  </form>
  <div class="stats">
    <ul class="stats">
      ${game.stats.map((statsItem) => {
        return `<li class="stats__result stats__result--${statsItem}"></li>`;
      }).join(``)}
        ${new Array(10 - game.stats.length).fill(`<li class="stats__result stats__result--unknown">`).join(``)}
    </ul>
  </div>
</div>
  `;
  }

  render(game, level) {
    return makeElementFromTemplate(this.template(game, level));
  }

  bind(game, level) {
    const timerContainer = this.element.querySelector(`.game__timer`);
    const timerId = timer(timerContainer, game);

    this.container = document.querySelector(`main`);
    const radio = this.element.querySelectorAll(`input`);
    switch (level.options.length) {
      case 1: // one picture
        [...radio].forEach((item) => {
          item.onchange = (event) => {
            event.preventDefault();
            clearInterval(timerId);
            this.switchToNextLevel();
          };
        });
        break;

      case 2: // two pictures
        [...radio].forEach((item) => {
          item.addEventListener(`change`, (event) => {
            event.preventDefault();

            if ((radio[0].checked || radio[1].checked)
              && (radio[2].checked || radio[3].checked)) {

              clearInterval(timerId);
              this.switchToNextLevel();
            }
          });
        });
        break;

      case 3: // three pictures
        const nextTrigger = this.element.querySelectorAll(`.game__option`);

        [...nextTrigger].forEach((item) => {
          item.addEventListener(`click`, (event) => {
            event.preventDefault();

            clearInterval(timerId);
            this.switchToNextLevel();
          });
        });
        break;
    }
  }

  switchToNextLevel() {

  }
}
