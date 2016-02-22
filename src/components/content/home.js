import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone'; // eslint-disable-line no-unused-vars

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

  now(format) {
    return moment().tz('America/Chicago').format(format);
  }

  init() {
    dateUtils.getDates().then((events) => {
      const now = this.now('M/D/YYYY');

      const result = events.data.filter(event =>
        event.eventDate === now)[0];

      if (result !== 'undefined') {
        this.setState({
          result: true,
          time: result.eventTime,
          type: result.eventType,
        });
      } else {
        this.setState({
          result: false,
          time: null,
          type: null,
        });
      }
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
        <Header now={this.now} />
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
