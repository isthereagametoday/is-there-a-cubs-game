import React from 'react';

// components

import Nav from './nav';
import Seo from './seo';
import Header from './header';
import Footer from './footer';

import Yes from './yes';
import No from './no';

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
      const status = (date.data !== []) ? date.data : false;
      console.log('status', status);
      const gameTimes = timesUtils.getTimes(status);

      this.setState({
        result: status.length ? true : false,
        times: gameTimes,
      })
    },
    (error) => {
      console.log('error:', error);
    });
  }

  render() {
    const result = this.state.result;
    const times = this.state.times;
    console.log('result', result);

    const status = result ? <Yes times={times} /> : <No />;

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
