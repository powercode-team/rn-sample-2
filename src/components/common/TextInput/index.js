import React from 'react';

import { Wrapper, StyledTextInput } from './styled';

const TextInput = ({ ...rest }) => (
  <Wrapper>
    <StyledTextInput {...rest} />
  </Wrapper>
);

export default TextInput;
