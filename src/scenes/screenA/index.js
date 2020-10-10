import {connect} from 'react-redux';

import ScreenA from './ScreenA';

import ActionSheetActions from '../../redux/actionsheet/actions';

import {ActionSheetViewsEnum} from '../../constants/actionSheet';

const mapDispatchToProps = (dispatch) => ({
  openModal: (id) =>
    dispatch(
      ActionSheetActions.open({
        viewType: ActionSheetViewsEnum.CardDetails,
        viewProps: {id, showOpenModalBtn: true},
      }),
    ),
});

export default connect(null, mapDispatchToProps)(ScreenA);
