import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../styles/RandomSpace.css';
import data from '../../sfpopos-data.json';

const RandomSpace = () => {
  const navigate = useNavigate();
  return (
    <button
      className='RandomSpace'
      onClick={(e) => {
        const id = Math.floor(Math.random() * data.length);
        navigate(`/details/${id}`);
      }}
    >
      Show random space
    </button>
  );
};

export default RandomSpace;
