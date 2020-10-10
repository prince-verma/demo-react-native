import {combineReducers} from 'redux';
import uiActionSheet from './actionsheet/reducer';
import uiScreenB from './uiScreenB/reducer';

export default combineReducers({
  uiActionSheet,
  uiScreenB,
});
