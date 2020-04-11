const toggleIsAdded = (additionalFeatures, feature, value) => {
  return additionalFeatures.map((additionalFeature) => {
    if (additionalFeature.id === feature.id) {
      return { ...additionalFeature, isAdded: value };
    }
    return additionalFeature;
  });
};

export const addFeature = (state, newFeature) => {
  const prevFeatures = [...state.car.features];

  return {
    ...state,
    additionalFeatures: toggleIsAdded(
      state.additionalFeatures,
      newFeature,
      true
    ),
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
      featureToRemove,
      false
    ),
    additionalPrice: state.additionalPrice - featureToRemove.price,
    car: { ...state.car, features: newFeatures },
  };
};
