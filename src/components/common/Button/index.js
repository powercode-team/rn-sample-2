import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../../theme';

import { Wrapper, Text, Icon } from './styled';

const Button = ({ onPress, text, color, widthIcon }) => (
  <Wrapper onPress={onPress} activeOpacity={0.6} color={color}>
    <Text>{text}</Text>
    {widthIcon && <Icon name="ios-arrow-down" size={20} color="#FFF" />}
  </Wrapper>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  widthIcon: PropTypes.bool,
};

Button.defaultProps = {
  color: theme.colors.primary,
  widthIcon: false,
};

export default Button;
