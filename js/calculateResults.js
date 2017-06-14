export default (game) => {
  const stats = game.stats;
  // let result = {
  //   bonuses: {
  //     correct: 0,
  //     fast: 0,
  //     lives: 0,
  //     slow: 0
  //   },
  //   factors: {
  //     correct: 100,
  //     fast: 50,
  //     lives: 50,
  //     slow: -50
  //   },
  //   totalPoints: {
  //     correct: 0,
  //     fast: 0,
  //     lives: 0,
  //     slow: 0
  //   }
  // };
  const result = stats.reduce((accumulator, current) => {
    switch (current) {
      case `correct`:
        result.bonuses.correct++;
        result.totalPoints.correct = result.bonuses.correct * result.factors.correct;
        break;
      case `fast`:
        result.bonuses.fast++;
        result.totalPoints.fast = result.bonuses.fast * result.factors.fast;
        break;
      case `lives`:
        result.bonuses.lives++;
        result.totalPoints.lives = result.bonuses.lives * result.factors.lives;
        break;
      case `slow`:
        result.bonuses.slow++;
        result.totalPoints.slow = result.bonuses.slow * result.factors.slow;
        break;
    }
    return result;
  }, {
    factors: {
      correct: 100,
      fast: 50,
      lives: 50,
      slow: -50
    }
  });
  return Object.assign({}, game, {
    result
  });
};
