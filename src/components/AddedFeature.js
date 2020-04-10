import React from 'react';
import { removeFeature } from '../actionsCreators';

const AddedFeature = ({ feature }) => {
  return (
    <li>
      <button className='button' onClick={() => removeFeature(feature.id)}>
        X
      </button>
      {feature.name}
      test
    </li>
  );
};

export default AddedFeature;
