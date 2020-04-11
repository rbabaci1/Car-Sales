import React from 'react';
import { useDispatch } from 'react-redux';
import { buyFeatureAction } from '../actionsCreators';

const AdditionalFeature = ({ feature }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <button
        className='button'
        onClick={() => dispatch(buyFeatureAction(feature))}
        disabled={feature.bought}
      >
        {feature.bought ? '✅' : 'Add'}
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
