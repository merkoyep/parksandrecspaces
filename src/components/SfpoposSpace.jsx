import React from 'react';
import './styles/SfpoposSpace.css';
const SfpoposSpace = (props) => {
  const { name, image, address, hours } = props;
  return (
    <div className='SfpoposSpace'>
      <img
        src={`${process.env.PUBLIC_URL}/assetphotos/${image}`}
        width='300'
        height='300'
        alt='Hello'
      />
      <h1>{name}</h1>
      <p>{address}</p>
      <p>Hours: {hours}</p>
    </div>
  );
};

export default SfpoposSpace;
