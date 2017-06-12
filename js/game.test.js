import assert from 'assert';
import game from './game';
// import moduleLevel from './module-gameLevel';

describe(`Game`, () => {
  describe(`Questions`, () => {
    it(`should be 10 question`, () => {
      assert.equal(10, game.questions.length);
    });

    it(`should give 30 seconds to every question`, () => {
      const checkQuestionTime = (question) => {
        assert.equal(30, question.time);
      };
      game.questions.forEach(checkQuestionTime);
    });

    it(`should be 3 variants of questions (levels)`, () => {
      const levelsVariants = Object.keys(game.levels).length;
      assert.equal(3, levelsVariants);
    });
  });
  describe(`Lives`, () => {
    it(`should be 3 lives at start of the game`, () => {
      assert.equal(game.lives, 3);
    });
  });
});
