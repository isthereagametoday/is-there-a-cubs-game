import React from 'react';

// components

import Nav from './nav';
import Seo from './seo';
import Header from './header';
import Footer from './footer';

// utils

import apiUtils from '../../utils/api-utils';
import dateUtils from '../../utils/date-utils';
import timesUtils from '../../utils/times-utils';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      result: false,
      number: null,
      time: null,
      times: null,
    };
  }

  componentWillMount() {
    this.init();
  }

  init() {
    const now = dateUtils.getToday('', 10);
    const gameStatus = apiUtils.getDate(now);

    gameStatus.then(date => {
      const status = date.data;
      const gameTimes = timesUtils.getTimes(status);

      this.setState({
        result: status ? true : false,
        number: status ? status.length : 0,
        times: gameTimes,
      })
    },
    (error) => {
      console.log('error:', error);
    });
  }

  render() {
    let status;
    const result = this.state.result;
    const number = this.state.number;
    const times = this.state.times;
    if (result) {
      status = (number > 1) ?
        <h2 className="c-pos">
          YES. There are actually {this.state.number} games today, at {this.state.times}.
        </h2>
        : <h2 className="c-pos">YES at {this.state.times}.</h2>;
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
