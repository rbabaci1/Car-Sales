export const addFeature = (state, newFeature) => {
  const carFeatures = [...state.car.features];

  return {
    ...state,
    car: { ...state.car, features: [...carFeatures, newFeature] },
  };
};

export const removeFeature = (state, featureId) => {
  const newCarFeatures = [
    ...state.car.features.filter((feature) => feature.id !== featureId),
  ];

  return {
    ...state,
    car: { ...state.car, features: newCarFeatures },
  };
};
