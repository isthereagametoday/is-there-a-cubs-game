import React, {component} from 'react';

class Yes extends React.Component {

 render() {
 	const doubleHead = this.props.times.length > 8;
 	const newType = this.props.type.length > 4;
 	let yesAt;
 	if (doubleHead && !newType) {
	  yesAt = 'YES. There are actually 2 games today, at ' + this.props.times + '.';
	 } else if (!doubleHead && newType) {
	  yesAt = 'WELL, There is actually a concert today at ' + this.props.times + '.';
	 } else {
	  yesAt = 'YES at ' + this.props.times + '.';
	 }
 		return (
 			<h2 className='c-pos'>
 				{yesAt}
 			</h2>
		);
	}
}

export default Yes;
