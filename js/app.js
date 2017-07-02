import introScreen from './screen/IntroScreen';
import greetingScreen from './screen/GreetingScreen';
import rulesScreen from './screen/RulesScreen';
import GameScreen from './screen/GameScreen';
import finalScreen from './screen/FinalScreen';
import initialState from './misc/objects/initialState';
import constant from './misc/objects/constants';

export default class Application {
  constructor() {
    this.routes = {

    };
    window.onhashchange = () => {
      this.changeController(location.hash);
    };
  }

  init() {
    this.changeController(location.hash);
  }

  changeController(route = ``) {
    switch (route) {
      case constant.INTRO_URL:
        introScreen.init();
        break;
      case constant.GREETING_URL:
        greetingScreen.init();
        break;
      case constant.RULES_URL:
        rulesScreen.init();
        break;
      case constant.GAME_URL:
        this.game = new GameScreen();
        this.game.init(initialState);
        break;
      case constant.STATS_URL:
        finalScreen.init(this.finalStats);
        break;
    }
  }

  showIntro() {
    location.hash = constant.INTRO_URL;
  }

  showGreeting() {
    location.hash = constant.GREETING_URL;
  }

  showRules() {
    location.hash = constant.RULES_URL;
  }

  startGame() {
    location.hash = constant.GAME_URL;
  }

  backToStart() {
    if (this.game) {
      this.game.stopGame();
      this.game = null;
    }
    location.hash = constant.GREETING_URL;
    this.showGreeting();
  }

  showStats(stats) {
    this.finalStats = stats;
    location.hash = constant.STATS_URL;
  }

}
