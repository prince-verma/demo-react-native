import {connect} from 'react-redux';

import ActionSheetActions from '../../redux/actionsheet/actions';

import ActionSheet from './ActionSheet';

const mapStateToProps = (state) => {
  const {uiActionSheet} = state;
  return {
    open: uiActionSheet.open,
    viewTypeData: uiActionSheet.viewTypeData,
  };
};
const mapDispatchToProps = {
  handleDismiss: ActionSheetActions.close,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionSheet);
