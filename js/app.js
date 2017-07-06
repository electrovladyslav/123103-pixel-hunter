import introScreen from './screen/IntroScreen';
import greetingScreen from './screen/GreetingScreen';
import rulesScreen from './screen/RulesScreen';
import gameScreen from './screen/GameScreen';
import finalScreen from './screen/FinalScreen';

import ControllerID from './misc/objects/controllerID';
import replaceHashSymbol from './misc/functions/replaceHashSymbol';
import encodeStats from './misc/functions/encodeStats';
import decodeStats from './misc/functions/decodeStats';

export default class Application {
  constructor() {
    this.routes = {
      [ControllerID.INTRO]: introScreen,
      [ControllerID.GREETING]: greetingScreen,
      [ControllerID.RULES]: rulesScreen,
      [ControllerID.GAME]: gameScreen,
      [ControllerID.STATS]: finalScreen
    };
    window.onhashchange = () => {
      this.changeController(replaceHashSymbol(location.hash));
    };
  }

  init() {
    this.changeController(replaceHashSymbol(location.hash));
  }

  changeController(route = ``) {
    if (route.indexOf(ControllerID.STATS) !== -1) {
      this.gameResult = decodeStats(route.slice(route.indexOf(`=`) + 1));
      route = ControllerID.STATS;
    }

    const Controller = this.routes[route];

    switch (route) {
      case ControllerID.GAME:
        this.game = Controller;
        this.game.init();
        break;
      case ControllerID.STATS:
        Controller.init(this.gameResult);
        break;
      default:
        Controller.init();
    }
  }

  showIntro() {
    location.hash = ControllerID.INTRO;
  }

  showGreeting() {
    location.hash = ControllerID.GREETING;
  }

  showRules() {
    location.hash = ControllerID.RULES;
  }

  startGame() {
    location.hash = ControllerID.GAME;
  }

  backToStart() {
    if (this.game) {
      this.game.stopGame();
      this.game = null;
    }
    location.hash = ControllerID.GREETING;
    this.showGreeting();
  }

  showStats(state) {
    this.state = state;
    const stats = encodeStats(state);
    location.hash = ControllerID.STATS + `=` + stats;
  }

}
