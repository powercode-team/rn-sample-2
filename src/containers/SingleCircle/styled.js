import styled from 'styled-components';

const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 30,
  },
}))``;

const Description = styled.Text`
  color: #6c798f;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14;
  text-align: center;
`;

const TagsWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20;
`;

const TagWrapper = styled.TouchableOpacity`
  margin-horizontal: 5;
  padding-horizontal: 5;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4;
`;

const Tag = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 13;
  text-align: center;
`;

const ChartWrapper = styled.View`
  justify-content: center;
`;

const EmptyContent = styled.View`
  justify-content: center;
  align-items: center;
`;

const EmptyContentTitle = styled.Text`
  text-align: center;
  color: #6c798f;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-vertical: 10;
  padding-horizontal: 40;
  margin-bottom: 20;
  border-radius: 40;
  elevation: 10;
  shadow-offset: 0 0;
  shadow-color: #8077e9;
  shadow-radius: 10;
  shadow-opacity: 0.7;
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 200;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16;
`;

const LinkButton = styled.TouchableOpacity`
  margin-bottom: 20;
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
  Scroll,
  Description,
  TagsWrapper,
  TagWrapper,
  Tag,
  ChartWrapper,
  EmptyContent,
  EmptyContentTitle,
  LinkButton,
  LinkButtonText,
  Button,
  ButtonText,
  SupportingText,
};
