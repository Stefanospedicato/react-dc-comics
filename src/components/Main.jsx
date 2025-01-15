import React from 'react';
import CardList from './CardList';

function Main() {
  return (
    <main>
      <div className="jumbo">
        <div className="container">
          <button className="btn btn-primary align-items-center">CURRENT SERIES</button>
        </div>
      </div>
      <div className="container content">
        <div className="card-container">
          <CardList />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn load btn-primary">LOAD MORE</button>
      </div>
    </main>
  );
}

export default Main;
