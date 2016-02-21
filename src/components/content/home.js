import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone'; // eslint-disable-line no-unused-vars
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
      <div>
        <header>
          <h2>Today is {this.now('dddd, MMMM Do, YYYY')}</h2>
        </header>

        <h1>Is There a
          <span className="c-neg"> C</span>
          <span className="c-pos">ubs </span>
          Game Today?
        </h1>
          {status}
        <h3>
          Probably not! Another season done and gone. Come back next year!
        </h3>

        <nav className="row middle spaced">
          <a href="about" className="column shrink">
            <h5>What / Why?</h5>
          </a>
          <a href="http://twitter.com/IsThereCubsGame" className="column shrink">
            <h5>@IsThereCubsGame</h5>
          </a>
          <a href="http://feeds.feedburner.com/isthereacubsgametoday" className="column shrink">
            <h5>RSS Feed</h5>
          </a>
        </nav>
        <div className="row center">
          <p className="column">
            Hey, neighbors. Live in the Lakeview/Wrigleyville area?
            You can make some extra money selling your parking spot to Cubs fans
            on game days. They'll handle all the parking operations for you!
            Check out
            <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank"> CubParking.com</a>.
          </p>
        </div>
        <div className="row center">
          <p className="column">
            Are you looking for
            <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank"> cubs parking</a>
            ? It's a great alternative to official
            <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank"> Wrigley Field Parking</a>.
          </p>
        </div>
        <div className="row center">
          <p className="column">
            <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank"> CubParking.com </a>
          </p>
        </div>
        <footer>
          The Chicago Cubs® is a trademark belonging to Major League Baseball Properties, Inc.
          or the respective teams,
          the owner of this site disclaims ownership
          of any trademarks, logos or images belonging to Major League Baseball Properties, Inc.
          or the respective team
          appearing on this site. The appearance of
          trademarks and/or team logos belonging to Major League Baseball Properties, Inc. or the
          respective team on
          this website does not constitute affiliation
          or endorsement by Major League Baseball or respective team of any of the services
          provided by this website.
        </footer>
      </div>
    );
  }
}

export default Home;
