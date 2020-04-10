const BUY_ITEM = 'BUY_ITEM';
const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = (itemId) => {
  // dispatch an action here to remove an item
  return {
    type: REMOVE_FEATURE,
    payload: { itemId },
  };
};

export const buyFeature = (itemId) => {
  // dipsatch an action here to add an item
  return {
    type: BUY_ITEM,
    payload: { itemId },
  };
};
