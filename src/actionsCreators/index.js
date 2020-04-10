export const BUY_FEATURE = 'BUY_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_TO_PRICE = 'ADD_TO_PRICE';

export const buyFeature = (feature) => {
  return {
    type: BUY_FEATURE,
    payload: feature,
  };
};

export const removeFeature = (featureId) => {
  return {
    type: REMOVE_FEATURE,
    payload: featureId,
  };
};

export const addToPrice = (featurePrice) => {
  return {
    type: ADD_TO_PRICE,
    payload: featurePrice,
  };
};
