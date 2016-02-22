import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any,
};

export default App;
