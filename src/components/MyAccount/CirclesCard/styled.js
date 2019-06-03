import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14;
  text-align: center;
  margin-bottom: 10;
`;

const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoItem = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 20;
  text-align: center;
`;

const ButtonsWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10;
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
  max-width: 150;
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

export {
  Wrapper,
  Name,
  Info,
  InfoItem,
  ButtonsWrapper,
  Button,
  ButtonText,
  LinkButton,
  LinkButtonText,
};
