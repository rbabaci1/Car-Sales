import React from 'react';
import { useDispatch } from 'react-redux';
import { buyFeature } from '../actionsCreators';

const AdditionalFeature = ({ feature }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <button className='button' onClick={() => dispatch(buyFeature(feature))}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
