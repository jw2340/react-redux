import React from 'react';
import {connect} from 'react-redux';
import Songs from './Songs';


export default function (props) {
  console.log(props);
  const genre = props.genre;
  const songs = props.songs;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;
  return(
    <div>
      {/*TODO fill this in with given name*/}
      <h3>{genre}</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  )
}
