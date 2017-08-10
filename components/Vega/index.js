import React, { PureComponent } from 'react';
import vegaEmbed from 'vega-embed';
import PropTypes from 'prop-types';

// window.vega = vega;
// console.log('vega', vega);

class VegaComponent extends PureComponent {

  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    spec: PropTypes.any.isRequired,
    vegaOpts: PropTypes.shape({
      actions: PropTypes.bool }),
  }

  static defaultProps = {
    vegaOpts: { actions: false },
  }

  componentDidMount() {
    const { spec } = this.props;

    // parse the vega spec and create the vis
    console.log('vegaOpts', this.props.vegaOpts);
    this.vegaViz = vegaEmbed(this.ref, spec, this.props.vegaOpts);
  }

  render() { return (<div ref={(r) => { this.ref = r; }}>Vega</div>); }
}

export default VegaComponent;
