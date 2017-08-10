import React from 'react';
import { List } from 'material-ui/List';

import Subheader from 'material-ui/Subheader';
import DataListItem from './DataListItem';

export default () => (<div style={{ minWidth: '260px', borderRight: '1px solid #eeeeee' }} >
  <List>
    <Subheader>Dimensions</Subheader>
    <DataListItem name="Category" type="string" />
    <Subheader>Measures</Subheader>
    <DataListItem name="Amount" type="number" />
  </List>
</div>);
