import React from 'react';
import PropTypes from 'prop-types';

import { Circles } from '../../common';

import { screenWidth } from '../../../utils/deviceInfo';

import {
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
} from './styled';

const Details = ({ circlesColors, returns, dailyChange, companies }) => (
  <Wrapper>
    <CirclesWrapper width={screenWidth / 3}>
      <Circles colors={circlesColors} returns={returns} />
      <DailyChange>+{dailyChange}%*</DailyChange>
      <DailyChangeTitle>DAILY CHANGE</DailyChangeTitle>
      <DailyChangeDescription>
        NO MINIMUM INVESTMENT AMOUNT REQUIRED
      </DailyChangeDescription>
    </CirclesWrapper>
    <CompaniesListWrapper>
      <CompanyHead>
        <CompanyHeadName>Name</CompanyHeadName>
        <CompanyHeadName>Ticker</CompanyHeadName>
      </CompanyHead>
      {companies.map(company => (
        <CompanyItem key={company.id}>
          <CompanyItemName>{company.name}</CompanyItemName>
          <CompanyItemTicker>{company.ticker}</CompanyItemTicker>
        </CompanyItem>
      ))}
    </CompaniesListWrapper>
  </Wrapper>
);

Details.propTypes = {
  circlesColors: PropTypes.array.isRequired,
  returns: PropTypes.number,
  dailyChange: PropTypes.number,
  companies: PropTypes.array,
};

Details.defaultProps = {
  companies: [],
  returns: null,
  dailyChange: null,
};

export default Details;
