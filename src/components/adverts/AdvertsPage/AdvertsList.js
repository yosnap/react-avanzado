import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import { advert } from '../propTypes';

function Advert({ name, sale, price, tags }) {
  return (
    <div>
      <p>{name}</p>
      <p>{sale ? 'Sell' : 'Buy'}</p>
      <p>{tags.join(', ')}</p>
      <p>{price}</p>
    </div>
  );
}

Advert.propTypes = {
  ...advert,
};

function AdvertsList({ adverts }) {
  const renderAdvert = ({ id, ...advert }) => (
    <article>
        <li key={id}>
        <Link to={`/adverts/${id}`}>
          <Advert {...advert} />
        </Link>
      </li>
    </article>
  );

  return (
    <ul className='list'>{adverts.map(renderAdvert)}</ul>
  );
}

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape({ id: T.string.isRequired }).isRequired)
    .isRequired,
};

export default AdvertsList;
