import React from 'react';
import NameBox from './name-box';

const TipsList = (props) => {
  const details = props.details.response.venue;

  const listTips = () => {
    const tipsList =  props.details.response.venue.tips.groups[0].items;
    return tipsList.map((tip) => {
      return (
        <div key={tip.id}>
            {tip.user &&
              <div className="tips-box">
                <p>
                <img className="user-photo" src={tip.user.photo.prefix+"40x40"+tip.user.photo.suffix} />
                  {tip.user.firstName} {tip.user.lastName} says:
                </p>
                {tip.text}
              </div>
            }
        </div>
      )
    })
  }

  return (
    <section className="col-md-8">
      <NameBox venueDetails={details} />
      {listTips()}
    </section>
  );
}


export default TipsList;
