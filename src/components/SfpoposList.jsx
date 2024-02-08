import React from 'react';
import SfpoposSpace from './SfpoposSpace';
import './styles/SfpoposList.css';
import data from '../sfpopos-data.json';

const spaces = data.map(({ title, address, hours, images }) => {
  return (
    <SfpoposSpace
      key={title}
      name={title}
      address={address}
      hours={hours}
      image={images[0]}
    />
  );
});

const SfpoposList = () => {
  return <div className='SfpoposList'>{spaces}</div>;
};
export default SfpoposList;
