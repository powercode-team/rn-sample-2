import React from 'react';
import PropTypes from 'prop-types';

import { TabButton, TabTitle } from './styled';

const Tab = ({
  title,
  onPress,
  isActive,
  widthInPercent,
  widthMargin,
  zIndex,
}) => (
  <TabButton
    onPress={onPress}
    width={widthInPercent}
    widthMargin={widthMargin}
    zIndex={zIndex}
    isActive={isActive}
    activeOpacity={0.8}
  >
    <TabTitle>{title}</TabTitle>
  </TabButton>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  widthInPercent: PropTypes.number,
  widthMargin: PropTypes.bool,
  zIndex: PropTypes.number,
};

Tab.defaultProps = {
  widthInPercent: '20%',
  widthMargin: false,
  zIndex: 1,
};

export default Tab;
