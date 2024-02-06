import React from 'react';

const ParksRecsSpace = (props) => {
  const { name, image, address } = props;
  return (
    <div>
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
