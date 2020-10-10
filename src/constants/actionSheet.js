import CardDetails from '../components/cardDetails';

export const ActionSheetViewsEnum = {
  CardDetails: 'CardDetails',
};

export const ActionSheetViewExtraPropsMap = {
  [ActionSheetViewsEnum.CardDetails]: {},
};

export const ActionSheetViewMap = {
  [ActionSheetViewsEnum.CardDetails]: CardDetails,
};
