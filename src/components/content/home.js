import React from 'react';

// components

import Nav from './nav';
import Seo from './seo';
import Header from './header';
import Footer from './footer';

// utils

import apiUtils from '../../utils/api-utils';
import dateUtils from '../../utils/date-utils';

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
    const now = dateUtils.getToday().substr(0, 10);
    const gameStatus = apiUtils.getDate(now);

    gameStatus.then(date => {
      const status = date.data;

      // empty status falls through
      if (status.length === 1) {
        this.setState({
          result: true,
          time: status[0].eventTime,
        });
      } else if (status.length > 1) {
        const eventTimes = status.map(d => d.eventTime);

        this.setState({
          result: true,
          number: status.length,
          times: eventTimes,
        });
      }
    },
    (error) => {
      console.log('error:', error);
    });
  }

  multipleTimes(times) {
    let result = '';
    times.forEach(t => {
      result = (result === '') ? t : `${result} and ${t}`;
    });
    return result;
  }

  render() {
    let status;
    const result = this.state.result;
    const number = this.state.number;
    const times = this.state.times;
    if (result) {
      status = (number) ?
        <h2 className="c-pos">
          YES. There are actually {this.state.number} games today, at {this.multipleTimes(times)}.
        </h2>
        : <h2 className="c-pos">YES at {this.state.time}.</h2>;
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
