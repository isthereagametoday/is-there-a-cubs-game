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
      result: null,
      times: null,
      type: null
    };
  }

  componentWillMount() {
    this.init();
  }

  init() {
    const now = dateUtils.getToday('', 10);
    const eventStatus = apiUtils.getDate(now);

    eventStatus.then(date => {
      let eventType, eventTimes, check;
      if (date != null) {
        eventTimes = timesUtils.getTimes(date);
        eventType = date.eventType;
        check = true;
      } else {
        check = false;
        eventType = eventTimes = null;
      }
      this.setState({
        result: check,
        times: eventTimes,
        type: eventType,
      })
    },
    (error) => {
      console.log('error:', error);
    });
  }

  render() {
    let message = null;
    if (this.state.result === true) {
      message = <Yes times={this.state.times} type={this.state.type} />;
    } else if (this.state.result === false) {
      message = <No />;
    } else {
      message = " ";
    }
    return (
      <div className="row middle-xsmall center-xsmall">
        <div className="column-xsmall">
        <Header />

          {message}

          <Nav link />
          <Seo />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
