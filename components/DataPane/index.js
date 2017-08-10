import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import DataListItem from './DataListItem';
import * as dataActions from '../../src/actions/data_actions';

const ItemProp = PropTypes.shape({});

class DataPaneComponent extends React.Component {

  static propTypes = {
    fetchMeasures: PropTypes.func.isRequired,
    fetchDimensions: PropTypes.func.isRequired,

    measures: PropTypes.arrayOf(ItemProp).isRequired,
    dimensions: PropTypes.arrayOf(ItemProp).isRequired,
  }

  componentDidMount() {
    this.props.fetchMeasures();
    this.props.fetchDimensions();
  }

  render() {
    const dimensions = this.props.dimensions.map(dim =>
      <DataListItem
        name={dim.name} colId={dim.colId} key={dim.colId} type={dim.type}
      />,
    );
    const measures = this.props.measures.map(measure =>
      <DataListItem
        name={measure.name}
        colId={measure.colId}
        key={measure.colId}
        type={measure.type}
      />,
    );
    return (<div style={{ minWidth: '260px', borderRight: '1px solid #eeeeee' }} >
      <List>
        <Subheader>Dimensions</Subheader>
        {dimensions}
        <Subheader>Measures</Subheader>
        {measures}
      </List>
    </div>);
  }
}

export const mapStateToProps = state => ({
  measures: state.data.measures,
  dimensions: state.data.dimensions,
});

export const mapDispatchToProps = dispatch => ({
  fetchMeasures: () => dispatch(dataActions.fetchMeasures()),
  fetchDimensions: () => dispatch(dataActions.fetchDimensions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataPaneComponent);
