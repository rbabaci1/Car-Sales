const toggleIsAdded = (additionalFeatures, featureId) => {
  return additionalFeatures.map((additionalFeature) => {
    if (additionalFeature.id === featureId) {
      return { ...additionalFeature, isAdded: true };
    }
    return additionalFeature;
  });
};

export const addFeature = (state, newFeature) => {
  const prevFeatures = [...state.car.features];

  return {
    additionalFeatures: toggleIsAdded(state.additionalFeatures, newFeature.id),
    additionalPrice: state.additionalPrice + newFeature.price,
    car: { ...state.car, features: [...prevFeatures, newFeature] },
  };
};

export const removeFeature = (state, featureToRemove) => {
  const newFeatures = [
    ...state.car.features.filter(
      (feature) => feature.id !== featureToRemove.id
    ),
  ];

  return {
    ...state,
    additionalPrice: state.additionalPrice - featureToRemove.price,
    car: { ...state.car, features: newFeatures },
  };
};
