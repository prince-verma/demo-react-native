import {Types} from './actions';

// viewTypeData = {viewType, viewProps}
const initialState = {
  open: false,
  viewTypeData: null,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case Types.OPEN:
      return {
        ...state,
        open: true,
        viewTypeData: payload.viewTypeData,
      };
    case Types.CLOSE: {
      return {
        ...state,
        open: false,
        viewTypeData: null,
      };
    }
    default:
      return state;
  }
}
