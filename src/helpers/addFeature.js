export const addFeature = (state, newFeature) => {
  const carFeatures = [...state.car.features];

  return {
    ...state,
    car: { ...state.car, features: [...carFeatures, newFeature] },
  };
};
