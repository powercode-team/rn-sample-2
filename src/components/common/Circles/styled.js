import styled from 'styled-components';

const CirclesWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledCircle = styled.View`
  justify-content: center;
  align-items: center;
  ${({ absolute }) => (absolute ? `position: absolute;` : '')} 
  ${({ left }) => (left ? `left: ${left};` : '')} 
  ${({ top }) => (top ? `top: ${top};` : '')} 
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  border-radius: ${({ diameter }) => diameter / 2};
  background-color: ${({ color }) => color};
  z-index: ${({ zIndex }) => zIndex};
`;

const ReturnsPercent = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 22;
  text-align: center;
`;

const ReturnsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 10;
  text-align: center;
`;

export { CirclesWrapper, StyledCircle, ReturnsPercent, ReturnsTitle };
