import React from 'react';
import { connect } from 'react-redux';
import { buyFeature } from '../actionsCreators';

const AdditionalFeature = ({ feature, buyFeature }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className='button' onClick={() => buyFeature(feature)}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  buyFeature,
};

export default connect(null, mapDispatchToProps)(AdditionalFeature);
