import styled from 'styled-components';

import Ionicons from '@expo/vector-icons/Ionicons';

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-vertical: 12;
  padding-horizontal: 40;
  border-radius: 40;
  elevation: 10;
  shadow-offset: 0 0;
  shadow-color: #8077e9;
  shadow-radius: 10;
  shadow-opacity: 0.7;
  background-color: ${({ theme }) => theme.colors.primary};
  min-width: 220;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16;
`;

const Icon = styled(Ionicons)`
  position: absolute;
  right: 20;
  top: 13;
  transform: rotate(-90deg);
`;

export { Wrapper, Text, Icon };
