export const BUY_FEATURE = 'BUY_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const buyFeatureAction = (feature, setBought) => {
  return {
    type: BUY_FEATURE,
    payload: { feature, setBought },
  };
};

export const removeFeatureAction = (feature) => {
  return {
    type: REMOVE_FEATURE,
    payload: feature,
  };
};
