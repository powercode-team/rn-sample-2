import styled from 'styled-components';

import { screenHeight } from '../../utils/deviceInfo';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 40;
`;

const Title = styled.Text`
  padding-vertical: 30;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 24;
  line-height: 26;
  text-align: center;
`;

const Buttons = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-horizontal: 20;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 30;
  width: 100%;
`;

const SignUpEmailBtn = styled.TouchableOpacity`
  margin-top: 20;
  padding-horizontal: 10;
  padding-vertical: 10;
`;

const SignUpEmailText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16;
  text-align: center;
`;

const BottomImage = styled.Image`
  width: 100%;
  align-self: flex-end;
  height: ${screenHeight * 0.4};
`;

export {
  Container,
  BottomImage,
  Title,
  Buttons,
  ButtonWrapper,
  SignUpEmailBtn,
  SignUpEmailText,
};
