import React from 'react';
import './styles/SfpoposSpace.css';
import { Link } from 'react-router-dom';

const SfpoposSpace = (props) => {
  const { name, image, address, hours, id } = props;
  return (
    <div className='SfpoposSpace'>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assetphotos/${image}`}
          width='300'
          height='300'
          alt='Hello'
        />
      </Link>
      <h1>
        <Link className='.SfpoposSpace-title' to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className='SfpoposSpace-info'>
        <p>{address}</p>
        <p>Hours: {hours}</p>
      </div>
    </div>
  );
};

export default SfpoposSpace;
