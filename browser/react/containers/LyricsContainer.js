import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    lyrics: state.lyrics
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchSearchLyrics: function(artistQuery, songQuery) {
      dispatch(searchLyrics(artistQuery, songQuery));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends Component {

    constructor() {

      super();

      this.state = Object.assign({
        artistQuery: '',
        songQuery: ''
      });

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleArtistInput = this.handleArtistInput.bind(this);
      this.handleSongInput = this.handleSongInput.bind(this);

    }

    handleArtistInput(artist) {
      this.setState({ artistQuery: artist });
    }

    handleSongInput(song) {
      this.setState({ songQuery: song });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (this.state.artistQuery && this.state.songQuery) {
        dispatchSearchLyrics(this.state.artistQuery, this.state.songQuery);
      }
    }

    render() {
      return (
        <Lyrics
          lyrics={this.props.lyrics}
          handleChange={this.handleChange}
          setArtist={this.handleArtistInput}
          setSong={this.handleSongInput}
          handleSubmit={this.handleSubmit} />
      );
    }

  }

);

