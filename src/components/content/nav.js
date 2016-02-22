import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
          <nav className="row middle-xsmall around-xsmall">
            {this.props.link ?
              <Link to="/about" className="column-medium-4 column-xsmall">
                <h5> What / Why? </h5>
              </Link>
              :
              <IndexLink to="/" className="column-medium-4 column-xsmall">
                <h5> Is there? </h5>
              </IndexLink>
            }
            <a href="http://twitter.com/IsThereCubsGame" className="column-medium-4 column-xsmall">
              <h5>@IsThereCubsGame</h5>
            </a>
            <a href="http://feeds.feedburner.com/isthereacubsgametoday" className="column-medium-4 column-xsmall">
              <h5>RSS Feed</h5>
            </a>
          </nav>
      );
  }
}

Nav.propTypes = {
  link: React.PropTypes.bool,
};

export default Nav;
