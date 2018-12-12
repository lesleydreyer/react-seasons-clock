import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Clock from './Clock';
class App extends Component {
  /*constructor(props) {
    super(props);//constructor overrides parent class but super references to parents functions
    this.state = { lat: null, errorMessage: '' }
  }*/
  //this state object is the same as doing the constructor above so can do either way
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),  //console.log(position),//callback for success
      err => this.setState({ errorMessage: err.message }) //callback for err //console.log(err)
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request" />
  }

  render() {
    return ( //rendercontent is a helper function in case you wanted to wrap each option with something like a border
      <div className="border red">
        {this.renderContent()}
        <Clock />
      </div>
    )


  }
}

export default App;
