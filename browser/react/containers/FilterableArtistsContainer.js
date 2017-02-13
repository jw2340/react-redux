import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import {connect} from 'react-redux';

//*question: is there a way to refactor this so
//we don't pass a class into the arguments for connect?
const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.artists.list
  }
}

export default connect(mapStateToProps)(
  class FilterableArtistsContainer extends React.Component {

    constructor() {

      super();

      this.state = Object.assign({
        inputValue: ''
      });

      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(evt) {
      this.setState({
        inputValue: evt.target.value
      });
    }

    render() {

      const inputValue = this.state.inputValue;
      const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));

      return (
        <div>
          <FilterInput
            handleChange={this.handleChange}
            inputValue={inputValue}
          />
          <Artists artists={filteredArtists}/>
        </div>
      );
    }
  }
)

