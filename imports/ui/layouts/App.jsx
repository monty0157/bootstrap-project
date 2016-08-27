import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { autobind } from 'core-decorators';

import Button from 'react-bootstrap/lib/Button';


class App extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  @autobind
  handleRouteToSite() {
    this.context.router.push('/site')
  };

  render() {
    return(
      <div className="jumbotron">
        <h1> App page </h1>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={this.handleRouteToSite}>Jadasd</button>
      </div>
    )
  }
}

const AppContainer = createContainer(() => {
  return {}
}, App);

export default AppContainer;
