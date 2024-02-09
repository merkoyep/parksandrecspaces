import React from 'react';
import './styles/SfpoposFeature.css';
const getFeature = (str) => {
  switch (str) {
    case 'sunset':
      return '🌅';
    case 'waterfront':
      return '🌊';
    case 'museum':
      return '🏛️';
    case 'trails':
      return '🥾';
    case 'wildlife':
      return '🌲';
    case 'fitness':
      return '🏋🏻';
    case 'flowers':
      return '🌸';
    default:
      return '?';
  }
};

const SfpoposFeature = (props) => {
  const emoji = getFeature(props.name);
  return <div className='SfpoposFeature'>{emoji}</div>;
};

export default SfpoposFeature;
