import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    selectedPlaylist: state.playlists.selected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
