import React from 'react';
import T from 'prop-types';
import './Adverts.css'
import { Link } from 'react-router-dom';

function EmptyList({ advertsCount }) {
  return (
    <div className='empty-list'>
      <p>No adverts here!</p>
      {advertsCount > 0 ? (
        'Refine your search'
      ) : (
        <Link role="button" className="button" to="/adverts/new">Create the first advert</Link>
      )}
    </div>
  );
}

EmptyList.propTypes = {
  advertsCount: T.number.isRequired,
};

export default EmptyList;
