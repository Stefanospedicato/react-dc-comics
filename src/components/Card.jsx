import React from 'react';
import comics from '../../data/comics';

const CardList = () => {
  return (
    <>
      {comics.map((comic, index) => (
        <div className="cards" key={index}>
          <div className='img-box'>
            <img src={comic.thumb} alt={comic.series} />
          </div>
          <p>{comic.series}</p>
        </div>
      ))}
    </>
  );
}

export default CardList;
