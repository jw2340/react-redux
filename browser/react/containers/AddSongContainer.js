import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs,
    playlistId: state.playlists.selected.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchAddSong: function(playlistId, songId) {
      dispatch(addSongToPlaylist(playlistId, songId));
    },
    loadAllSongs: function() {
      dispatch(loadAllSongs());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class AddSongContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = Object.assign({
        songId: 1,
        error: false
      });
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
      this.setState({
        songId: evt.target.value,
        error: false
      });
    }

    handleSubmit(evt) {

      evt.preventDefault();

      const playlistId = this.props.playlistId
      const songId = this.state.songId;

      dispatchAddSong(playlistId, songId)
        .catch(() => this.setState({ error: true }));

    }

    render() {

      const songs = this.props.songs;
      const error = this.state.error;

      return (
        <AddSong
          songs={songs}
          error={error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
      );
    }
  }

);


