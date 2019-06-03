import styled from 'styled-components';

const TabButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ isActive }) => (isActive ? '#FFF' : '#e1e1e1')} ;
  padding-vertical: 12;
  padding-horizontal: 5;
  margin-left: ${({ widthMargin }) => (widthMargin ? -5 : 0)}
  border-radius: 8;
  elevation: 10;
  shadow-offset: 2px 2px;
  shadow-color: #BFBFBF;
  shadow-radius: 0;
  shadow-opacity: 1;
  z-index: ${({ zIndex }) => zIndex}
`;

const TabTitle = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14;
`;

export { TabButton, TabTitle };
