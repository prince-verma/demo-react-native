import {Types} from './actions';

// viewTypeData = {viewType, viewProps}
const initialState = {
  isLoading: true,
  data: {},
  errorMessage: null,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case Types.INIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case Types.ADD_DATA:
      return {
        ...state,
        isLoading: false,
        data: payload?.data,
        errorMessage: payload?.errorMessage,
      };
    case Types.RESET_DATA: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
