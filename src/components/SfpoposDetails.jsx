// src/POPOSDetails.js

import React from 'react';
import { useParams } from 'react-router';
import data from '../sfpopos-data.js';
import './styles/SfpoposDetails.css';
import SfpoposFeatureList from './SfpoposFeatureList';

function POPOSDetails(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className='SfpoposDetails'>
      <div className='SfpoposDetails-image'>
        <img
          src={`${process.env.PUBLIC_URL}/assetphotos/${images[0]}`}
          alt={title}
        />
      </div>

      <div className='SfpoposDetails-info'>
        <h1 className='SfpoposDetails-title'>{title}</h1>
        <p className='SfpoposDetails-desc'>{desc}</p>
        <p className='SfpoposDetails-hours'>Hours: {hours}</p>
        <SfpoposFeatureList features={features} />
        <p className='SfpoposDetails-geo'>
          Coordinates: {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export default POPOSDetails;
