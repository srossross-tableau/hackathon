import React from 'react';

export default (type) => {
  switch (type) {
    case 'string':
      return <i className="fa fa-font" style={{ color: '#cccccc', fontSize: '24px' }} />;
    case 'number':
      return <i className="fa fa-hashtag" style={{ color: '#cccccc', fontSize: '24px' }} />;
    default:
      return <i className="fa fa-question" style={{ color: '#cccccc', fontSize: '24px' }} />;
  }
};
