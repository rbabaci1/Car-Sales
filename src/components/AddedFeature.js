import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actionsCreators';

const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      <button className='button' onClick={() => removeFeature(feature)}>
        X
      </button>
      {feature.name}
      test
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
