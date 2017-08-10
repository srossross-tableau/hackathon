import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import Popover from 'material-ui/Popover';

import dataListItemIcon from './DataListItemIcon';
import Preview from './preview';

class DataListItem extends React.Component {
  state = { open: false, anchorEl: null };
  render() {
    const { name, type } = this.props;
    return (<ListItem
      ref={(c) => { this.anchorEl = c; }}
      primaryText={name}
      onTouchTap={e => this.setState({ open: !this.state.open, anchorEl: e.currentTarget })}
      leftIcon={dataListItemIcon(type)}
    >
      <Popover
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        open={this.state.open}
        onRequestClose={() => this.setState({ open: false, anchorEl: null })}
        animated={false}
      >
        <Preview />
      </Popover>
    </ListItem>);
  }
}

DataListItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default DataListItem;
