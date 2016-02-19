import React from 'react';
import Home from './content/home';
import About from './content/about';

class App extends React.Component {
  render(){
    return (
    	<div className="container">
  	    {this.props.children}
    	</div>
 	  );
  }
}

export default App;
