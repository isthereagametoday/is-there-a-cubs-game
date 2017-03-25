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
      result: "loading",
      times: null,
      type: null
    };
  }

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps() {
    this.init();
  }

  init() {
    const now = dateUtils.getToday('', 10);
    const eventStatus = apiUtils.getDate(now);

    eventStatus.then(date => {
      const check = (date.status === 200) ? true : false;
      const eventTimes = check ? timesUtils.getTimes(date) : null;
      const eventType = check ? date.data.eventType : null;
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
    const result = this.state.result;
    const times = this.state.times;
    const type = this.state.type;
    let status;
    if (result === "loading") {
      status = " "
    } else if (!result) {
      status = <No />;
    } else {
      status = <Yes times={times} type={type} />;
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
