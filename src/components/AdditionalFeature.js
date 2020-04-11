import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyFeatureAction } from '../actionsCreators';

const AdditionalFeature = ({ feature }) => {
  const [bought, setBought] = useState(false);
  const dispatch = useDispatch();

  return (
    <li>
      <button
        className='button'
        onClick={() => {
          dispatch(buyFeatureAction(feature, setBought));
          setBought(true);
        }}
        disabled={bought}
      >
        {bought ? '✅' : 'Add'}
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
