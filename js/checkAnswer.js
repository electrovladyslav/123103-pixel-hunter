import constants from './constants';
const {FAST_TIME, SLOW_TIME} = constants;
/**
 * Check answer and return 'right' or 'wrong'
 * @param {Array} answers array with actual answers
 * @param {Array} rightAnswers array with right answers
 * @param {Number} timeLeft time left in level
 * @return {string} result `correct` or `wrong`
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
