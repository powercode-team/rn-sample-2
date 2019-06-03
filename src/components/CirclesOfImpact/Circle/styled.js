import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
`;

const Content = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 24;
  text-align: center;
`;

const Description = styled.Text`
  color: #6c798f;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14;
  text-align: center;
`;

const CenterContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 25;
`;

const ButtonsWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-vertical: 5;
  padding-horizontal: 20;
  border-radius: 40;
  elevation: 10;
  shadow-offset: 0 0;
  shadow-color: #8077e9;
  shadow-radius: 10;
  shadow-opacity: 0.7;
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 100;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14;
`;

const LinkButton = styled.TouchableOpacity`
  margin-top: 10;
  padding-horizontal: 20;
`;

const LinkButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14;
`;

const SupportingText = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14;
  text-align: center;
`;

export {
  Wrapper,
  Content,
  Title,
  Description,
  CenterContent,
  ButtonsWrapper,
  Button,
  ButtonText,
  LinkButton,
  LinkButtonText,
  SupportingText,
};
