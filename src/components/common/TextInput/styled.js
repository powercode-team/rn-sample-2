import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
`;

const StyledTextInput = styled.TextInput`
  padding-vertical: 16;
  padding-horizontal: 10;
  margin-top: 20;
  border-radius: 5;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 18;
`;

export { Wrapper, StyledTextInput };
