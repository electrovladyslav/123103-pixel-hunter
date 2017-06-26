import AbstractView from '../AbstractView';
import timer from '../timer';

export default class GameLevelView extends AbstractView {
  constructor(state) {
    super();
    this.game = state;
    this.level = state.levels[state.questions[state.currentQuestion].level];
  }

  get template() {
    return `
<div class="game">
  <div class="game__lives">
      ${new Array(this.game.lives).fill(`<span class="game__live game__live--full"></span>`).join(``)}
      ${new Array(3 - this.game.lives).fill(`<span class="game__live game__live--empty"></span>`).join(``)}
  </div>
  <p class="game__timer">${this.game.questions[this.game.currentQuestion].time}</p>
  <p class="game__task">${this.level.task}</p>
    
  <form class="game__content ${this.level.contentWide}">
       
  ${this.level.options.map((optionItem, optionNumber, options) => {
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
      ${this.game.stats.map((statsItem) => {
        return `<li class="stats__result stats__result--${statsItem}"></li>`;
      }).join(``)}
        ${new Array(10 - this.game.stats.length).fill(`<li class="stats__result stats__result--unknown">`).join(``)}
    </ul>
  </div>
</div>
  `;
  }

  bind() {
    const timerContainer = this.element.querySelector(`.game__timer`);
    const timerId = timer(timerContainer, this.game);

    this.container = document.querySelector(`main`);
    const radio = this.element.querySelectorAll(`input`);
    switch (this.level.options.length) {
      case 1: // one picture
        [...radio].forEach((item) => {
          item.onchange = (event) => {
            event.preventDefault();
            clearInterval(timerId);
            this.onChooseAnswers([event.target.value]
              , [this.level.options[0].rightAnswer]);
          };
        });
        break;

      case 2: // two pictures
        [...radio].forEach((item) => {
          item.addEventListener(`change`, (event) => {
            event.preventDefault();

            if ((radio[0].checked || radio[1].checked)
              && (radio[2].checked || radio[3].checked)) {

              const checkedRadio = [];
              [...radio].forEach((radioItem) => {
                if (radioItem.checked) {
                  checkedRadio.push(radioItem.value);
                }
              });

              clearInterval(timerId);
              this.onChooseAnswers(checkedRadio
                , [this.level.options[0].rightAnswer, this.level.options[1].rightAnswer]);
            }
          });
        });
        break;

      case 3: // three pictures
        const nextTrigger = this.element.querySelectorAll(`.game__option`);

        [...nextTrigger].forEach((item, itemNumber) => {
          item.addEventListener(`click`, (event) => {
            event.preventDefault();

            clearInterval(timerId);
            this.onChooseAnswers([this.level.options[itemNumber].rightAnswer]
              , [this.level.toFind]);
          });
        });
        break;
    }
  }

  /**
   * Return chosed answers and right anwers
   * @param {Array} checkedAnswers
   * @param {Array} rightAnswers
   * @param {Number} timeLeft
   */
  onChooseAnswers(checkedAnswers, rightAnswers, timeLeft) {

  }

  switchNextLevel(state) {
    showScreen(this.container, state(Object.assign({}, newState, {
      currentQuestion: state.currentQuestion + 1
    })));
  }
}
