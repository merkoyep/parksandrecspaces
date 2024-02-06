import React from 'react';
import ParksRecsSpace from './ParksRecsSpace';

const ParksRecsList = () => {
  return (
    <div>
      <ParksRecsSpace
        name='City Centre Community Centre'
        address='5900 Minoru Blvd.'
        image='c4.jpeg'
      />
      <ParksRecsSpace
        name='West Richmond Community Centre'
        address='9180 No 1 Rd.'
        image='WRCC.jpeg'
      />
      <ParksRecsSpace
        name='Japanese Canadian Cultural Centre'
        address='4251 Moncton St.'
        image='JCCCC.jpeg'
      />
      <ParksRecsSpace
        name='Hamilton Community Centre'
        address='5140 Smith Dr.'
        image='HMCC.jpeg'
      />
      <ParksRecsSpace
        name='Steveston Community Centre'
        address='4111 Moncton St.'
        image='STCC.jpeg'
      />
      <ParksRecsSpace
        name='South Arm Community Centre'
        address='8880 Williams Rd.'
        image='SACC.jpeg'
      />
    </div>
  );
};
export default ParksRecsList;
