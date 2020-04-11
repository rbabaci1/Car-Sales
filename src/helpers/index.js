const toggleIsAdded = (additionalFeatures, feature) => {
  return additionalFeatures.map((additionalFeature) => {
    if (additionalFeature.id === feature.id) {
      return { ...additionalFeature, bought: !additionalFeature.bought };
    }
    return additionalFeature;
  });
};

export const buyFeature = (state, newFeature) => {
  const prevFeatures = [...state.car.features];

  return {
    ...state,
    additionalFeatures: toggleIsAdded(state.additionalFeatures, newFeature),
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
    additionalFeatures: toggleIsAdded(
      state.additionalFeatures,
      featureToRemove
    ),
    additionalPrice: state.additionalPrice - featureToRemove.price,
    car: { ...state.car, features: newFeatures },
  };
};
