import constants from './constants';

export default (game) => {
  let result = {
    stats: game.stats,
    correct: {
      name: `Правильных ответов`,
      quantity: 0,
      factor: constants.RIGHT_FACTOR,
      points: 0
    },
    bonuses: {
      fast: {
        name: `Бонус за скорость`,
        icon: `fast`,
        quantity: 0,
        factor: constants.FAST_FACTOR,
        points: 0
      },
      lives: {
        name: `Бонус за жизни`,
        icon: `heart`,
        quantity: game.lives,
        factor: constants.LIVES_FACTOR,
        points: 0
      },
      slow: {
        name: `Штраф за медлительность`,
        icon: `slow`,
        quantity: 0,
        factor: constants.SLOW_FACTOR,
        points: 0
      }
    },
    totalPoints: 0
  };

  if (game.lives > 0) {
    result.win = true;
    result.header = `Победа!`;
  } else {
    result.win = false;
    result.header = `FAIL!`;
  }

  result = result.stats.reduce((accumulator, current) => {
    switch (current) {
      case `correct`:
        accumulator.correct.quantity++;
        break;
      case `fast`:
        accumulator.bonuses.fast.quantity++;
        accumulator.correct.quantity++;
        break;
      case `slow`:
        accumulator.bonuses.slow.quantity++;
        accumulator.correct.quantity++;
        break;
    }
    return accumulator;
  }, result);

  result.correct.points = result.correct.quantity * result.correct.factor;
  result.totalPoints += result.correct.points;

  Object.entries(result.bonuses).forEach((entry) => {
    const bonusItem = entry[1];
    bonusItem.points = bonusItem.quantity * bonusItem.factor;
    result.totalPoints += bonusItem.points;
  });

  return result;
};
