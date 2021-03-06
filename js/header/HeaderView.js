import AbstractView from '../AbstractView';

export default class IntroView extends AbstractView {
  get template() {
    return `
<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
</header>
    `;
  }

  bind() {
    const backTrigger = this.element.querySelector(`.back`);
    backTrigger.addEventListener(`click`, () => {
      this.backToStart();
    });
  }

  backToStart() {

  }
}
