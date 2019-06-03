import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

const Card = ({ children, height }) => (
  <Wrapper height={height}>{children}</Wrapper>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,

  height: PropTypes.number,
};

Card.defaultProps = {
  height: 250,
};

export default Card;
