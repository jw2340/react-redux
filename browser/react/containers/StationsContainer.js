import {connect} from 'react-redux';
import Stations from '../components/stations';

const convertSongsToStations = (songsArray) => {
  let stationsObj = {};
  songsArray.forEach(song => {
    let genre = song.genre;
    if (!stationsObj[genre]) {
      stationsObj[genre] = [];
    }
    stationsObj[genre].push(song);
  });
  return stationsObj;
};

const mapStateToProps = (state) => {
  return {
    stations: convertSongsToStations(state.songs)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
