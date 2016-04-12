import React from 'react';
//import {FONT_SIZE_LARGE} from '../utilities/styleGuide';

const Icon = ({name}) => {
  return (
    <i
      className={`fa fa-${name}`}
      style={{fontSize: '2rem'}}
    >
    </i>
  );
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Icon;