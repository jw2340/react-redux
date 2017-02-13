import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';

import {connect} from 'react-redux';

import {toggleSong} from '../action-creators/player';

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


/*export default class extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggle(song, list) {
    store.dispatch(toggleSong(song, list));
  }

  render() {
    return (
      <Artist
        {...this.state.player}
        selectedArtist={this.state.artists.selected}
        toggleOne={this.toggle}
        children={this.props.children} />
    );
  }

}*/
