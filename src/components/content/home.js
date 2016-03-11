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
      time: null,
      type: null,
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const now = dateUtils.getToday().substr(0, 10);
    const gameStatus = apiUtils.getDate(now);

    console.log('time:', now);

    gameStatus.then((date) => {
      let status = date.data;

      console.log('status:', status);

      // empty status falls through
      
      if (status.length === 1) {
        this.setState({
          result: true,
          multiple: false,
          time: status[0].eventTime,
          type: status[0].eventType,
        });
      } else if (status.length > 1) {
        const times = status.map(function(date) {
            return date.eventTime;
          });

        console.log('times:', times);
        
        this.setState({
          result: true,
          multiple: true,
          number: status.length,
          times: times,
          type: status[0].eventType,
        });
      }
    }),
    (error) => {
      console.log('error:', error);
    };
  }

  multipleTimes(times){
    times.forEach(function(entry) {
        console.log(entry);
    });
  }

  render() {
    let status;
    const result = this.state.result;
    const multiple = this.state.multiple;
    console.log(this.state);
    if (result && !multiple) {
      switch (this.state.type) {
        case 'game':
          status = <h2 className="c-pos">YES at {this.state.time}.</h2>;
          break;

        default:
          status =
          <h2 className="c-pos">Well, there's a {this.state.type} at {this.state.time}.</h2>;
          break;
      }
    } else if (result && multiple) {
      let times = this.state.times;
      switch (this.state.type) {
        case 'game':
          status = <h2 className="c-pos">YES. There are actually {this.state.number} games today, at {this.multipleTimes(times)}.</h2>;
          break;

        default:
          status =
          <h2 className="c-pos">There's a {this.state.type} at {this.state.time}.</h2>;
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
