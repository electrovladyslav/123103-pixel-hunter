import levelVariants from './levelsVariants';

export default Object.freeze({
  levels: levelVariants,
  currentQuestion: 0,
  lives: 3,
  stats: [],

  questions: [
    {
      level: `level-1`,
      time: 30
    },
    {
      level: `level-3`,
      time: 30
    },
    {
      level: `level-2`,
      time: 30
    },
    {
      level: `level-1`,
      time: 30
    },
    {
      level: `level-2`,
      time: 30
    },
    {
      level: `level-3`,
      time: 30
    },
    {
      level: `level-1`,
      time: 30
    },
    {
      level: `level-2`,
      time: 30
    },
    {
      level: `level-3`,
      time: 30
    },
    {
      level: `level-1`,
      time: 30
    }
  ],
  results: {
    header: `Победа!`,
    thisGame: {
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
      ],
      factor: 100,
      extras: [
        {
          title: `Бонус за скорость`,
          result: 1,
          icon: `fast`,
          factor: 50
        },
        {
          title: `Бонус за жизни`,
          result: 1,
          icon: `heart`,
          factor: 50
        },
        {
          title: `Штраф за медлительность`,
          result: 2,
          icon: `slow`,
          factor: -50
        }
      ]
    },
    prevGame: {
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
      ],
      final: `fail`
    },
    prevGame2: {
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
      ],
      factor: 100,
      final: 900,
      extras: [
        {
          title: `Бонус за скорость`,
          result: 1,
          icon: `fast`,
          factor: 50
        }
      ]
    }
  }
});
