import React from 'react';

import dateUtils from '../../utils/date-utils';

class Header extends React.Component {
  render() {
    const now = dateUtils.getToday('dddd, MMMM Do, YYYY');

    return (
        <header>
            <h2>Today is {now}</h2>

          <h1>Is There a
            <span className="c-neg"> C</span>
            <span className="c-pos">ubs </span>
            Game Today?
          </h1>
        </header>
    );
  }
}

Header.propTypes = {
  now: React.PropTypes.func,
};

export default Header;
