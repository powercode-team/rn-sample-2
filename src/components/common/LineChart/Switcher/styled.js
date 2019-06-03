import styled from 'styled-components';

const SwitcherWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SwitchBtn = styled.TouchableOpacity`
  padding-vertical: 10;
  padding-horizontal: 10;
`;

const SwitchBtnText = styled.Text`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 12;
  text-align: center;
`;

export { SwitcherWrapper, SwitchBtn, SwitchBtnText };
