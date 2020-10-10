import listMockData from './list.json';

export const getItemData = (id) => {
  return listMockData.find((item) => item?.id === id) || {};
};
