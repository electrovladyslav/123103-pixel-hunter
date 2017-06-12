/**
 * Check answer and return 'right' or 'wrong'
 * @param {Array} answers array with actual answers
 * @param {Array} rightAnswers array with right answers
 * @return {string} result `correct` or `wrong`
 */
export default (answers, rightAnswers) => {
  let result = `correct`;
  answers.forEach((answer, answerItem) => {
    if (answers[answerItem] !== rightAnswers[answerItem]) {
      result = `wrong`;
    }
  });
  return result;
};
