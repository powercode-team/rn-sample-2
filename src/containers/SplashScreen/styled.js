import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 30;
`;

const Logo = styled.Image`
  width: 100%;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 40;
  text-align: center;
  margin-bottom: 30;
`;

const SmallText = styled.Text`
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 16;
  text-align: center;
  margin-vertical: 20;
`;

const SignInBtn = styled.TouchableOpacity`
  padding-horizontal: 10;
  padding-vertical: 10;
`;

const SignInText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16;
  text-align: center;
`;

const SignInWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30;
`;

export {
  Container,
  Logo,
  Title,
  SmallText,
  SignInWrapper,
  SignInBtn,
  SignInText,
};
