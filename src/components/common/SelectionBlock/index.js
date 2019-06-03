import React from 'react';
import PropTypes from 'prop-types';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Wrapper, Option, MarkWrapper, LabelWrapper, Label } from './styled';

const SelectionBlock = ({ items, selectedIds, onSelect }) => (
  <Wrapper>
    {items.map(item => {
      const isActive = selectedIds.includes(item.id);
      return (
        <Option
          key={item.id}
          isActive={isActive}
          onPress={() => onSelect(item)}
        >
          {isActive && (
            <MarkWrapper>
              <Ionicons name="md-checkmark" size={20} color="#FFFFFF" />
            </MarkWrapper>
          )}
          <LabelWrapper>
            <Label isActive={isActive}>{item.label}</Label>
          </LabelWrapper>
        </Option>
      );
    })}
  </Wrapper>
);

SelectionBlock.propTypes = {
  items: PropTypes.array.isRequired,
  selectedIds: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SelectionBlock;
