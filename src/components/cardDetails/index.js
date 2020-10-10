import {connect} from 'react-redux';
import CardDetails from './CardDetails';

import {getItemData} from '../../__mocks__/list';

import NavigationActions from '../../redux/navigation/actions';
import ActionsheetActions from '../../redux/actionsheet/actions';

import {SCREEN_B} from '../../constants/screenNameConstants';

const mapStateToProps = (state, ownProps) => {
  return {
    ...getItemData(ownProps?.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  navigateToScreenB: (id) => {
    NavigationActions.navigateTo({routeName: SCREEN_B, params: {id}});
    dispatch(ActionsheetActions.close());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
