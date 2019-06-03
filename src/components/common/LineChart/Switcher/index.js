import React from 'react';
import PropTypes from 'prop-types';

import { SwitcherWrapper, SwitchBtn, SwitchBtnText } from './styled';

const switcherBtnText = ['1w', '1m', '1y', 'all'];
const Switcher = ({ activeItem, onChange }) => (
  <SwitcherWrapper>
    {switcherBtnText.map(item => (
      <SwitchBtn key={item} onPress={() => onChange(item)}>
        <SwitchBtnText isActive={activeItem === item}>{item}</SwitchBtnText>
      </SwitchBtn>
    ))}
  </SwitcherWrapper>
);

Switcher.propTypes = {
  activeItem: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switcher;
