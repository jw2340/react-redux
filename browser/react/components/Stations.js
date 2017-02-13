import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

export default function(props) {
  console.log(props);
  let genres = Object.keys(props.stations);
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        genres.map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`/stations/${genre}`}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  )
}
