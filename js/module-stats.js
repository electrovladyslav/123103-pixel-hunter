import makeElementFromTemplate from './makeElementFromTmeplate.js';
import statsLevelTemplate from './statsLevelTemplate';

const moduleElement = (game) => {
  return makeElementFromTemplate(statsLevelTemplate(game));
};

export default moduleElement;
