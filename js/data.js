// const initialState = {
//   screen: 0,
//   level: null,
//   nextScreen: 1
// };

const gameLevels = [
  {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: [
      {
        name: `question1`,
        imgSrc: `http://placehold.it/468x458`,
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
    optionsSrc: [
      `http://placehold.it/468x458`,
      `http://placehold.it/468x458`
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
  }
];
// const screens = {
//   'screen-0': {
//
// }
// };


export default gameLevels;

