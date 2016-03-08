import React from 'react';

// components

import Nav from './nav';
import Seo from './seo';
import Header from './header';
import Footer from './footer';

// utils

import dateUtils from '../../utils/date-utils';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      result: false,
      time: null,
      type: null,
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const now = dateUtils.getToday().substr(0, 10);
    const gameStatus = dateUtils.getDate(now);
    console.log('time:', now);
    console.log('status:', status);
    if (gameStatus.length === 1) {
      this.setState({
        result: true,
        multiple: false,
        time: gameStatus.data[0].eventTime,
        type: gameStatus.data[0].eventType,
      });
    } else if (gameStatus.length > 1) {
      this.setState({
        result: true,
        multiple: true,
        time: gameStatus.data[0].eventTime,
        type: gameStatus.data[0].eventType,
      });
    }
    //status.then((date) => {
    //  this.setState({
    //    result: true,
    //    time: date.data[0].eventTime,
    //    type: date.data[0].eventType,
    //  });
    //},
    (error) => {
      console.log('error:', error);
    });
  }

  render() {
    let status;
    if (this.state.result) {
      switch (this.state.type) {
        case 'Game':
          status = <h2 className="c-pos">YES at {this.state.time}.</h2>;
          break;

        default:
          status =
          <h2 className="c-pos">Well, there's a {this.state.type} at {this.state.time}.</h2>;
          break;
      }
    } else {
      status = <h2 className="c-neg">NO.</h2>;
    }

    return (
      <div className="row middle-xsmall center-xsmall">
        <div className="column-xsmall">
        <Header />
          {status}

          <Nav link />
          <Seo />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
