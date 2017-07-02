import HeaderView from './HeaderView';
import app from '../main';


const header = new HeaderView();
header.backToStart = () => {
  app.backToStart();
};

export default () => header.element;
