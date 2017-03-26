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
      let check;
      if (date.status === 200) {
        check = "yes";
      } else if (date.status === 204) {
        check = "no";
      }
      const eventTimes = (check === "yes") ? timesUtils.getTimes(date) : null;
      const eventType = (check === "yes") ? date.data.eventType : null;
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
    console.log(this.state.result);
    let result = null;
    if (this.state.result === "yes") {
      result = <Yes times={this.state.times} type={this.state.type} />;
    } else if (this.state.result === "no") {
      result = <No />;
    } else {
      result = " ";
    }
    return (
      <div className="row middle-xsmall center-xsmall">
        <div className="column-xsmall">
        <Header />
          {result}

          <Nav link />
          <Seo />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
