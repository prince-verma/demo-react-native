export const Types = {
  CLOSE: 'uiActionSheet/CLOSE',
  OPEN: 'uiActionSheet/OPEN',
};

export const Actions = {
  close: () => ({
    payload: {
      viewTypeData: undefined,
    },
    type: 'uiActionSheet/CLOSE',
  }),
  open: (viewTypeData) => ({
    payload: {viewTypeData},
    type: 'uiActionSheet/OPEN',
  }),
};

export default Actions;
