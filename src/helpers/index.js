export const addFeature = (state, newFeature) => {
  const prevFeatures = [...state.car.features];
  const prevAdditionalPrice = state.additionalPrice;

  return {
    ...state,
    additionalPrice: prevAdditionalPrice + newFeature.price,
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
