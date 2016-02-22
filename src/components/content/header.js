import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header>
            <h2>Today is {this.props.now('dddd, MMMM Do, YYYY')}</h2>

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
