import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import dataListItemIcon from './DataListItemIcon';

const DataListItem = ({ name, type }) => (<ListItem
  primaryText={name}
  leftIcon={dataListItemIcon(type)}
/>);

DataListItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default DataListItem;
