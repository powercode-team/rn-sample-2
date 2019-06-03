import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

import { Wrapper, TabsWrapper, Content } from './styled';

const Tabs = ({ tabs, onTabChange, activeIndex, renderContent }) => (
  <Wrapper>
    <TabsWrapper>
      {tabs.map((tab, i) => (
        <Tab
          key={tab}
          title={tab}
          isActive={activeIndex === i}
          onPress={() => onTabChange(i)}
          widthInPercent={100 / tabs.length}
          widthMargin={i !== 0}
          zIndex={tabs.length - (i + 1)}
        />
      ))}
    </TabsWrapper>
    <Content>{renderContent()}</Content>
  </Wrapper>
);

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  onTabChange: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  renderContent: PropTypes.func.isRequired,
};

export default Tabs;
