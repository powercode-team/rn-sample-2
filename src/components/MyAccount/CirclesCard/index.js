import React from 'react';
import PropTypes from 'prop-types';

import { Card, LineChart } from '../../common';

import {
  Wrapper,
  Name,
  Info,
  InfoItem,
  ButtonsWrapper,
  Button,
  ButtonText,
  LinkButton,
  LinkButtonText,
} from './styled';

const CirclesCard = ({
  name,
  totalDeposit,
  returns,
  charData,
  onInvestPress,
  onInvitePress,
}) => (
  <Card>
    <Wrapper>
      <Name>{name}</Name>
      <LineChart chartWidth={210} chartHeight={70} defaultData={charData} />
      <Info>
        <InfoItem>
          $
          {totalDeposit.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}
        </InfoItem>

        <InfoItem>
          {returns.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
          %
        </InfoItem>
      </Info>
      <ButtonsWrapper>
        <Button onPress={onInvestPress} activeOpacity={0.6}>
          <ButtonText>Invest</ButtonText>
        </Button>
        <LinkButton onPress={onInvitePress}>
          <LinkButtonText>Invite</LinkButtonText>
        </LinkButton>
      </ButtonsWrapper>
    </Wrapper>
  </Card>
);

CirclesCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalDeposit: PropTypes.number.isRequired,
  returns: PropTypes.number.isRequired,
  charData: PropTypes.object.isRequired,
  onInvestPress: PropTypes.func.isRequired,
  onInvitePress: PropTypes.func.isRequired,
};

export default CirclesCard;
