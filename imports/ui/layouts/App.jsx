import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { autobind } from 'core-decorators';

class App extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    muiTheme: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context)
    this.style = {
      card: {
        backgroundColor: this.context.muiTheme.palette.primary1Color,
        color: this.context.muiTheme.palette.textColor,
      },
      background: {
        backgroundColor: this.context.muiTheme.palette.accent1Color,
      },
    }
  };

  @autobind
  handleRouteToSite() {
    this.context.router.push('/site')
  };

  render() {
    return(
      <div className="main-div" style={this.style.background}>
        <nav
         className="navbar navbar-default"
         style={this.style.card}
         id="nav-bar"
        />

        <div
         className="jumbotron"
         style={this.style.card}
         id="jumbotron"
        >
          <h1> App page </h1>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.handleRouteToSite}>Go to site</button>
        </div>

        <ul id="side-menu" className="nav nav-pills nav-stacked" style={this.style.card}>
          <li
           role="presentation"
           className="active"
           style={this.style.card}><a href="">Hello</a></li>
          <p>hello</p>
        </ul>
      </div>
    )
  }
}

const AppContainer = createContainer(() => {
  return {}
}, App);

export default AppContainer;
