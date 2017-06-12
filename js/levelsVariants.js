export default Object.freeze({
  'level-1': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    contentWide: ``,
    options: [
      {
        name: `question1`,
        imgSrc: `../img/D2F0370D6.jpg`,
        width: `100%`,
        height: `auto`,
        rightAnswer: `paint`
      },
      {
        name: `question2`,
        imgSrc: `../img/1KegWPz.jpg`,
        width: `100%`,
        height: `auto`,
        rightAnswer: `paint`
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
        imgSrc: `../img/CF42609C8.jpg`,
        width: `auto`,
        height: `100%`,
        rightAnswer: `paint`
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
    toFind: `paint`,
    options: [
      {
        name: `question1`,
        imgSrc: `../img/5C7060EC5.jpg`,
        width: `100%`,
        height: `auto`,
        rightAnswer: `paint`
      },
      {
        name: `question2`,
        imgSrc: `../img/DiHM5Zb.jpg`,
        width: `100%`,
        height: `auto`,
        rightAnswer: `photo`
      },
      {
        name: `question3`,
        imgSrc: `../img/DKR1HtB.jpg`,
        width: `auto`,
        height: `100%`,
        rightAnswer: `photo`
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
  }
});
