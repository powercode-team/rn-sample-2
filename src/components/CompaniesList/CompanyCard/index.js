import React from 'react';
import PropTypes from 'prop-types';

import companyLogoPlaceholder from '../../../../assets/images/company-logo-placeholder.png';

import { Card, Button } from '../../common';

import {
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
} from './styled';

const CompanyCard = ({
  name,
  logo,
  riskLevel,
  returnVal,
  cost,
  onInvestPress,
  onLearnMorePress,
}) => (
  <Wrapper>
    <Card height={260}>
      <Content>
        <TopSection>
          <Logo source={logo} resizeMode="contain" resizeMethod="resize" />
          <RiskLvl>
            <RiskLvlVal>{riskLevel}</RiskLvlVal>
            <RiskLvlTitle>RISK LEVEL</RiskLvlTitle>
          </RiskLvl>
          <Return>
            <ReturnVal>{returnVal}%</ReturnVal>
            <ReturnTitle>2 YEAR RETURN</ReturnTitle>
          </Return>
        </TopSection>
        <Button text={`Buy now width ${name}`} onPress={onInvestPress} />
        <LinkButton onPress={onLearnMorePress}>
          <LinkButtonText>LEAR MORE</LinkButtonText>
        </LinkButton>
        <Cost>COST PER CIRCLE ${cost}</Cost>
      </Content>
    </Card>
  </Wrapper>
);

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.number,
  riskLevel: PropTypes.string.isRequired,
  returnVal: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  onInvestPress: PropTypes.func.isRequired,
  onLearnMorePress: PropTypes.func.isRequired,
};

CompanyCard.defaultProps = {
  logo: companyLogoPlaceholder,
};

export default CompanyCard;
