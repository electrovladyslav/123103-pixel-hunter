import AbstractView from '../AbstractView';

export default class IntroView extends AbstractView {
  get template() {
    return `
<main class="central__content">
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</main>
    `;
  }

  bind() {
    const nextTrigger = this.element.querySelector(`.intro__asterisk`);
    nextTrigger.addEventListener(`click`, () => {
      this.switchToNextScreen();
    });
  }

  switchToNextScreen() {

  }
}
