import introScreen from './screen/IntroScreen';
import greetingScreen from './screen/GreetingScreen';
import newGameScreen from './screen/GameScreen';
import finalScreen from './screen/FinalScreen';

export default class Application {

  static showIntro() {
    introScreen.init();
  }

  static showGreeting() {
    greetingScreen.init();
  }

  static showGame() {
    newGameScreen.init();
  }

  static showStats(stats) {
    finalScreen.init(stats);
  }

}
