import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';

import {connect} from 'react-redux';

import {toggleSong} from '../action-creators/player';

// *question where do we find the children when we console.log(props) in Artist.js
const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    children: ownProps.children
  }, state.player)

  //lines 10-12 is equivalent to the lines below
  //if there are a lot of properties that need to be passed down then Object.assign is the way to go
/*    selectedArtist: state.artists.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    children: ownProps.children
  }*/
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
