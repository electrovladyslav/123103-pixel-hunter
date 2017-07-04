import CONSTANTS from '../objects/constants';
/**
 * Convert input object to object for final rendering
 * @param {Object} game with fields stats and lives
 * @return {{stats: (*|Array), correct: {name: string, quantity: number, factor: number, points: number}, bonuses: {fast: {name: string, icon: string, quantity: number, factor: number, points: number}, lives: {name: string, icon: string, quantity: (result.bonuses.lives|{name, icon, quantity, factor, points}|*|number), factor: number, points: number}, slow: {name: string, icon: string, quantity: number, factor: *, points: number}}, totalPoints: number}}
 */
export default (game) => {
  if ((game === void 0)
    || (game.stats === void 0)
    || (game.lives === void 0)
    ) {
    throw new Error(`Empty data`);
  }

  let result = {
    stats: game.stats,
    correct: {
      name: `Правильных ответов`,
      quantity: 0,
      factor: CONSTANTS.RIGHT_FACTOR,
      points: 0
    },
    bonuses: {
      fast: {
        name: `Бонус за скорость`,
        icon: `fast`,
        quantity: 0,
        factor: CONSTANTS.FAST_FACTOR,
        points: 0
      },
      lives: {
        name: `Бонус за жизни`,
        icon: `heart`,
        quantity: game.lives,
        factor: CONSTANTS.LIVES_FACTOR,
        points: 0
      },
      slow: {
        name: `Штраф за медлительность`,
        icon: `slow`,
        quantity: 0,
        factor: CONSTANTS.SLOW_FACTOR,
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

  Object.keys(result.bonuses).forEach((key) => {
    const bonusItem = result.bonuses[key];
    bonusItem.points = bonusItem.quantity * bonusItem.factor;
    result.totalPoints += bonusItem.points;
  });

  return result;
};
