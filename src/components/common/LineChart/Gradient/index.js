import React from 'react';
import PropTypes from 'prop-types';

import { Svg } from 'expo';

const Gradient = ({ from, to }) => (
  <Svg.Defs key="gradient">
    <Svg.LinearGradient id="gradient" x1="0" y="0%" x2="100%" y2="0%">
      <Svg.Stop offset="0%" stopColor={from} />
      <Svg.Stop offset="100%" stopColor={to} />
    </Svg.LinearGradient>
  </Svg.Defs>
);

Gradient.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Gradient;
