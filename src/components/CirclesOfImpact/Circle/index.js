import React from 'react';
import PropTypes from 'prop-types';

import { Card, Circles } from '../../common';

import {
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
} from './styled';

const CircleCard = ({
  title,
  description,
  returns,
  supporting,
  circlesColors,
  onInvestPress,
  onSeeMorePress,
}) => (
  <Wrapper>
    <Card height={280}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CenterContent>
          <Circles colors={circlesColors} returns={returns} />
          <ButtonsWrapper>
            <Button onPress={onInvestPress} activeOpacity={0.6}>
              <ButtonText>Invest</ButtonText>
            </Button>
            <LinkButton onPress={onSeeMorePress}>
              <LinkButtonText>SEE MORE</LinkButtonText>
            </LinkButton>
          </ButtonsWrapper>
        </CenterContent>

        <SupportingText>
          +{supporting} ARE SUPPORTING THIS CIRCLE
        </SupportingText>
      </Content>
    </Card>
  </Wrapper>
);

CircleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  returns: PropTypes.number.isRequired,
  supporting: PropTypes.number.isRequired,
  circlesColors: PropTypes.array.isRequired,
  onInvestPress: PropTypes.func.isRequired,
  onSeeMorePress: PropTypes.func.isRequired,
};

export default CircleCard;
