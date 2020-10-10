import {dateTimeUrl} from '../../constants/api';
import {tryAgain} from '../../constants/apiError';
import * as Api from '../../api';
import {isOkStatus} from '../../utilities/validations';

export const Types = {
  INIT_REQUEST: 'uiScreenB/INIT_REQUEST',
  ADD_DATA: 'uiScreenB/ADD_DATA',
  RESET_DATA: 'uiScreenB/RESET_DATA',
};

export const getDateTimeData = (dispatch) => async () => {
  try {
    dispatch({type: Types.INIT_REQUEST});
    const {data, status} = await Api.get(dateTimeUrl);
    if (isOkStatus(status)) {
      return dispatch({type: Types.ADD_DATA, payload: {data}});
    }
    return dispatch({type: Types.ADD_DATA, payload: {errorMessage: tryAgain}});
  } catch (error) {
    return dispatch({type: Types.ADD_DATA, payload: {errorMessage: tryAgain}});
  }
};
