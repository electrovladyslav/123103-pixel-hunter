import constants from '../objects/constants';
const {FAST_TIME, SLOW_TIME} = constants;
/**
 * Checks answer and returns 'correct', 'wrong', 'fast' or 'slow'
 * @param {Array} answers array with actual answers
 * @param {Array} rightAnswers array with right answers
 * @param {Number} timeLeft time left in level
 * @return {string} result 'correct', 'wrong', 'fast' or 'slow'
 */
export default (answers, rightAnswers, timeLeft) => {
  let result = `correct`;
  answers.forEach((answer, answerItem) => {
    if (answers[answerItem] !== rightAnswers[answerItem]) {
      result = `wrong`;
    }
  });
  if (result === `wrong`) {
    return result;
  }
  if (timeLeft >= FAST_TIME) {
    result = `fast`;
  }
  if (timeLeft <= SLOW_TIME) {
    result = `slow`;
  }
  return result;
};
