export default Object.freeze({
  'level-1': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    contentWide: ``,
    options: [
      {
        name: `question1`,
        imgSrc: `http://placehold.it/468x458`,
        width: 468,
        height: 458,
        answers: {
          photo: {
            checked: false
          },
          paint: {
            checked: false
          }
        }
      },
      {
        name: `question2`,
        imgSrc: `http://placehold.it/468x458`,
        width: 468,
        height: 458,
        answers: {
          photo: {
            checked: false
          },
          paint: {
            checked: false
          }
        }
      }
    ],
    stats: [
      `wrong`,
      `slow`,
      `fast`,
      `correct`,
      `unknown`,
      `unknown`,
      `unknown`,
      `unknown`,
      `unknown`,
      `unknown`
    ]
  },
  'level-2': {
    task: `Угадай, фото или рисунок?`,
    contentWide: `game__content--wide`,
    options: [
      {
        name: `question1`,
        imgSrc: `http://placehold.it/705x455`,
        width: 705,
        height: 455,
        answers: {
          photo: {
            checked: false
          },
          paint: {
            checked: false
          }
        }
      }
    ],
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
  },
  'level-3': {
    task: `Найдите рисунок среди изображений`,
    contentWide: `game__content--triple`,
    options: [
      {
        name: `question1`,
        imgSrc: `http://placehold.it/304x455`,
        width: 304,
        height: 455,
        answers: {
          photo: {
            checked: false
          },
          paint: {
            checked: false
          }
        }
      },
      {
        name: `question2`,
        imgSrc: `http://placehold.it/304x455`,
        width: 304,
        height: 455,
        answers: {
          photo: {
            checked: false
          },
          paint: {
            checked: false
          }
        }
      },
      {
        name: `question3`,
        imgSrc: `http://placehold.it/304x455`,
        width: 304,
        height: 455,
        answers: {
          photo: {
            checked: false
          },
          paint: {
            checked: false
          }
        }
      }
    ],
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
  },
  'results': {
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
