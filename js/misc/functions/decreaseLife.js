export default (state) => {
  const newLives = state.lives - 1;

  if (newLives < 0) {
    throw new Error(`Lives quantity should not be negative!`)
  }

  return Object.assign({}, state, {
    lives: newLives
  })
};
