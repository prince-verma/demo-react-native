import {navigate, navigateBack} from './rootNavigation';

export const Actions = {
  navigateBack: () => {
    navigateBack();
  },
  navigateTo: (payload) => {
    const {routeName, params} = payload;
    navigate(routeName, params);
  },
};

export default Actions;
