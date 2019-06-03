import React from 'react';
import PropTypes from 'prop-types';

import {
  CirclesWrapper,
  StyledCircle,
  ReturnsPercent,
  ReturnsTitle,
} from './styled';

const coordinatesByIndex = i => {
  if (i === 0) {
    return { diameter: 100, top: '-10%', left: '5%' };
  }
  if (i === 1) {
    return { diameter: 100, top: '-22%', left: '19%' };
  }
  if (i === 2) {
    return { diameter: 100, top: '-3%', left: '19%' };
  }

  return { diameter: 0, left: 0, top: 0 };
};

const Circles = ({ colors, returns }) => (
  <CirclesWrapper>
    {colors.map((color, i) => (
      <StyledCircle
        key={color}
        color={color}
        zIndex={i + 1}
        absolute
        {...coordinatesByIndex(i)}
      />
    ))}
    <StyledCircle color="#FFFFFF" zIndex={4} diameter={80}>
      <ReturnsPercent>{returns}%*</ReturnsPercent>
      <ReturnsTitle>RETURNS</ReturnsTitle>
    </StyledCircle>
  </CirclesWrapper>
);

Circles.propTypes = {
  colors: PropTypes.array.isRequired,
  returns: PropTypes.number,
};

Circles.defaultProps = {
  returns: null,
};

export default Circles;
