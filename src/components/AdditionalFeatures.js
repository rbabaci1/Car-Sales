import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ additionalFeatures }) => {
  return (
    <div className='content'>
      <h4>Additional Features</h4>

      {additionalFeatures.length ? (
        <ol type='1'>
          {additionalFeatures.map((item) => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ additionalFeatures }) => {
  return {
    additionalFeatures,
  };
};

export default connect(mapStateToProps)(AdditionalFeatures);
