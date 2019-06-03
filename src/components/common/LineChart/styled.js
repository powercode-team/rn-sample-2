import styled from 'styled-components';

const Wrapper = styled.View``;

const PercentIncrease = styled.Text`
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 16;
  color: ${({ theme }) => theme.colors.primary};
`;

export { Wrapper, PercentIncrease };
