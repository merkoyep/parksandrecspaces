import React, { useState } from 'react';
import SfpoposSpace from './SfpoposSpace';
import './styles/SfpoposList.css';
import data from '../sfpopos-data.js';

const SfpoposList = () => {
  const [query, setQuery] = useState('');
  const spaces = data
    .filter((obj) => {
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
      // true if query is in address
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase());
      // return true if either is true
      return inTitle || inAddress;
    })
    .map((obj, i) => {
      return (
        <SfpoposSpace
          id={obj.id}
          key={`${obj.title}-${obj.id}`}
          name={obj.title}
          address={obj.address}
          hours={obj.hours}
          image={obj.images[0]}
        />
      );
    });
  return (
    <div className='SfpoposList-container'>
      <form>
        <input
          value={query}
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <div className='SfpoposList'>{spaces}</div>
    </div>
  );
};
export default SfpoposList;
