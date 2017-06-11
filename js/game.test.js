import assert from 'assert';
import game from './game';

describe(`Game`, () => {
  describe(`Levels`, () => {
    it(`should be 10 question`, () => {
      assert.equal(10, game.questions.length);
    });

    it(`should give 30 seconds to every question`, () => {
      const checkQuestionTime = (question) => {
        assert.equal(30, question.time);
      };
      game.questions.forEach(checkQuestionTime);
    });
  });
});
