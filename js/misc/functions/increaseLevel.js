export default (state) => {
  const levelNumber = state.currentQuestion;

  return Object.assign({}, state, {
    currentQuestion: levelNumber + 1
  });
};
