import introScreen from './screen/IntroScreen';
import greetingScreen from './screen/GreetingScreen';
import rulesScreen from './screen/RulesScreen';
import GameScreen from './screen/GameScreen';
import finalScreen from './screen/FinalScreen';
import initialState from './misc/objects/initialState';

export default class Application {

  static showIntro() {
    introScreen.init();
  }

  static showGreeting() {
    greetingScreen.init();
  }

  static showRules() {
    rulesScreen.init();
  }

  static startGame() {
    this.game = new GameScreen();
    this.game.init(initialState);
  }

  static backToStart() {
    this.game.stopGame();
    this.game = null;
    this.showGreeting();
  }

  static showStats(stats) {
    finalScreen.init(stats);
  }

}
