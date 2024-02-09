import React from 'react';
import SfpoposFeature from './SfpoposFeature';
import './styles/SfpoposFeature.css';

function SfpoposFeatureList(props) {
  const icons = props.features.map((feature) => {
    return <SfpoposFeature key={feature} name={feature} />;
  });
  return <div className='SfpoposFeatureList'>{icons}</div>;
}

export default SfpoposFeatureList;
