import React, { PureComponent } from 'react';
import { runtime } from 'vega';
import vegaEmbed from 'vega-embed';
import PropTypes from 'prop-types';

// window.vega = vega;
// console.log('vega', vega);

class VegaComponent extends PureComponent {

  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    spec: PropTypes.any.isRequired,
  }

  componentDidMount() {
    console.log('this.ref', this.ref);
    const { spec } = this.props;

    // parse the vega spec and create the vis
    const vis = vegaEmbed(this.ref, spec);
  }

  render() { return (<div ref={(r) => { this.ref = r; }}>Vega</div>); }
}

export default VegaComponent;
