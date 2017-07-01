import HeaderView from './HeaderView';
import App from '../App';


const header = new HeaderView();
header.backToStart = () => {
  App.backToStart();
};

export default () => header.element;
