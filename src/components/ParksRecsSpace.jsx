import React from 'react';
import './styles/ParksRecsSpace.css';
const ParksRecsSpace = (props) => {
  const { name, image, address } = props;
  return (
    <div className='ParksRecsSpace'>
      <img
        src={`${process.env.PUBLIC_URL}/assetphotos/${image}`}
        width='300'
        height='300'
        alt='Hello'
      />
      <h1>{name}</h1>
      <p>{address}</p>
    </div>
  );
};

export default ParksRecsSpace;
