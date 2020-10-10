import {connect} from 'react-redux';

import ScreenB from './ScreenB';

import {getItemData} from '../../__mocks__/list';

import ActionSheetActions from '../../redux/actionsheet/actions';
import {getDateTimeData} from '../../redux/uiScreenB/actions';

import {ActionSheetViewsEnum} from '../../constants/actionSheet';

const mapStateToProps = (state, ownProps) => {
  const data = getItemData(ownProps?.route?.params?.id);
  return {
    ...state.uiScreenB,
    ...data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  initData: getDateTimeData(dispatch),
  openCardDetailsModal: (id) =>
    dispatch(
      ActionSheetActions.open({
        viewType: ActionSheetViewsEnum.CardDetails,
        viewProps: {id},
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenB);
