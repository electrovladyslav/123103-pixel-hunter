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

  changeController(route = ``) {
    window.alert(route);
  }

  showIntro() {
    location.hash = constant.INTRO_URL;
    introScreen.init();
  }

  showGreeting() {
    location.hash = constant.GREETING_URL;
    greetingScreen.init();
  }

  showRules() {
    location.hash = constant.RULES_URL;
    rulesScreen.init();
  }

  startGame() {
    location.hash = constant.GAME_URL;
    this.game = new GameScreen();
    this.game.init(initialState);
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
    location.hash = constant.STATS_URL;
    finalScreen.init(stats);
  }

}
