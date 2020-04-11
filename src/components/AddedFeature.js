import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFeatureAction } from '../actionsCreators';

const AddedFeature = ({ feature }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <button
        className='button'
        onClick={() => dispatch(removeFeatureAction(feature))}
      >
        X
      </button>
      {feature.name}
      test
    </li>
  );
};

export default AddedFeature;
