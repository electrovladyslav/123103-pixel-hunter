import levelVariants from './levelsVariants';
import constants from './constants';

export default Object.freeze({
  levels: levelVariants,
  currentQuestion: 0,
  lives: constants.LIVES,
  stats: [],

  questions: [
    {
      level: `level-1`,
      time: constants.TIME
    },
    {
      level: `level-3`,
      time: constants.TIME
    },
    {
      level: `level-2`,
      time: constants.TIME
    },
    {
      level: `level-1`,
      time: constants.TIME
    },
    {
      level: `level-2`,
      time: constants.TIME
    },
    {
      level: `level-3`,
      time: constants.TIME
    },
    {
      level: `level-1`,
      time: constants.TIME
    },
    {
      level: `level-2`,
      time: constants.TIME
    },
    {
      level: `level-3`,
      time: constants.TIME
    },
    {
      level: `level-1`,
      time: constants.TIME
    }
  ],
  prevGamesResults: [
    {
      lives: 0,
      stats: [
        `wrong`,
        `slow`,
        `fast`,
        `correct`,
        `wrong`,
        `unknown`,
        `slow`,
        `wrong`,
        `fast`,
        `wrong`
      ]
    },
    {
      lives: 1,
      stats: [
        `wrong`,
        `slow`,
        `fast`,
        `correct`,
        `wrong`,
        `unknown`,
        `slow`,
        `unknown`,
        `fast`,
        `unknown`
      ]
    }
  ]
});
