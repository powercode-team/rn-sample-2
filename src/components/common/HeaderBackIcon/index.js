import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import theme from '../../../theme';

import { Wrapper } from './styled';

const HeaderBackIcon = () => (
  <Wrapper>
    <Ionicons name="ios-arrow-back" size={28} color={theme.colors.primary} />
  </Wrapper>
);

export default HeaderBackIcon;
