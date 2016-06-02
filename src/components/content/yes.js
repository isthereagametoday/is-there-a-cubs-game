import React, {component} from 'react';

class Yes extends React.Component {

 render() {
 	const yesAt = (this.props.times.length > 8) ?
    'YES. There are actually 2 games today, at ' + this.props.times + '.'
    :
    'YES at ' + this.props.times + '.';
 		return (
 			<h2 className='c-pos'>
 				{yesAt}
 			</h2>
		);
	}
}

export default Yes;
