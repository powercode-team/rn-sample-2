import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
`;

const Content = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const TopSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40;
`;

const Logo = styled.Image`
  flex: 1;
`;

const RiskLvl = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  padding-horizontal: 10;
  min-width: 40;
`;

const RiskLvlVal = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16;
  text-align: center;
`;

const RiskLvlTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 11;
`;

const Return = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding-horizontal: 10;
`;

const ReturnVal = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 24;
  text-align: center;
`;

const ReturnTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 11;
`;

const LinkButton = styled.TouchableOpacity`
  margin-vertical: 20;
  padding-horizontal: 20;
`;

const LinkButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16;
`;

const Cost = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 16;
  text-align: center;
`;

export {
  Wrapper,
  Content,
  TopSection,
  Logo,
  RiskLvl,
  RiskLvlVal,
  RiskLvlTitle,
  Return,
  ReturnVal,
  ReturnTitle,
  LinkButton,
  LinkButtonText,
  Cost,
};
