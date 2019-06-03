import styled from 'styled-components';

const Wrapper = styled.View`
  flex-direction: row;
  padding-vertical: 10;
`;

const CirclesWrapper = styled.View`
  justify-content: center;
  border-right-width: 2;
  border-right-color: #ececec;
  padding-vertical: 30;
  min-width: 140;
  width: ${({ width }) => width};
  max-height: 300;
`;

const DailyChange = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 22;
  text-align: center;
  margin-top: 30;
`;

const DailyChangeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 10;
  text-align: center;
  margin-bottom: 20;
`;

const DailyChangeDescription = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 12;
  text-align: center;
`;

const CompaniesListWrapper = styled.View`
  flex: 1;
  padding-horizontal: 10;
`;

const CompanyItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 5;
  border-top-width: 1;
  border-top-color: #f5f5f5;
`;

const CompanyHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 5;
`;

const CompanyHeadName = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 10;
  text-align: center;
`;

const CompanyItemName = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 10;
  text-align: center;
`;

const CompanyItemTicker = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 10;
  text-align: center;
`;

export {
  Wrapper,
  CirclesWrapper,
  DailyChange,
  DailyChangeTitle,
  DailyChangeDescription,
  CompaniesListWrapper,
  CompanyItem,
  CompanyHead,
  CompanyHeadName,
  CompanyItemName,
  CompanyItemTicker,
};
