import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  let genre = ownProps.params.genre;
  return {
    genre: genre,
    songs: state.songs.filter(song => {
      return song.genre === genre;
    }).map(convertSong),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
