import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';


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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
