let setFeatureBought = null;

export const buyFeature = (state, { feature, setBought }) => {
  setFeatureBought = setBought;
  const prevFeatures = [...state.car.features];

  return {
    ...state,
    additionalPrice: state.additionalPrice + feature.price,
    car: { ...state.car, features: [...prevFeatures, feature] },
  };
};

export const removeFeature = (state, featureToRemove) => {
  const newFeatures = [
    ...state.car.features.filter(
      (feature) => feature.id !== featureToRemove.id
    ),
  ];

  setFeatureBought(false);

  return {
    ...state,
    additionalPrice: state.additionalPrice - featureToRemove.price,
    car: { ...state.car, features: newFeatures },
  };
};
