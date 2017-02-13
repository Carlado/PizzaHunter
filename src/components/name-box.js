import React from 'react';

const NameBox = ({venueDetails}) => {
  return (
    <article className="row name-box venue-content">
      <div className="col-xs-8">
        <h3>{venueDetails.name}</h3>
      </div>
      <div className="col-xs-4">
        <div className="venue-page-rating">
          {venueDetails.rating ?
            <span>{venueDetails.rating}</span> :
            <span>-</span>
          }
        </div>
      </div>
    </article>
  );
}

export default NameBox;
