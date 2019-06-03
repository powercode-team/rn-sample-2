import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Carousel from 'react-native-snap-carousel';

import { screenWidth } from '../../utils/deviceInfo';

import { LineChart } from '../../components/common';
import CirclesCard from '../../components/MyAccount/CirclesCard';

import {
  Container,
  Wrapper,
  InfoWrapper,
  InfoBlock,
  InfoTitle,
  InfoValue,
  Circles,
  CirclesTitle,
  BottomBtn,
  BottomBtnText,
} from './styled';

const data1 = {
  percentIncrease: 1.67,
  data: [0, 4, 5, 6, 8, 8, 7, 10, 12, 9, 14, 16],
};

const data2 = {
  percentIncrease: 1.37,
  data: [1, 3, 5, 6, 8, 3, 7, 11, 12, 9, 14, 16],
};

const data3 = {
  percentIncrease: 2.77,
  data: [0, 4, 5, 10, 8, 5, 7, 16, 13, 9, 14, 16],
};

const data4 = {
  percentIncrease: 1.29,
  data: [0, 4, 7, 3, 8, 9, 7, 11, 13, 8, 14, 16],
};

const circles = [
  {
    id: 1,
    name: 'A world of Bots',
    totalDeposit: 2500,
    returns: 6.57,
    charData: {
      percentIncrease: 1.29,
      data: [0, 4, 7, 3, 8, 9, 7, 11, 13, 8, 14, 16],
    },
  },
  {
    id: 2,
    name: 'Because She Can',
    totalDeposit: 6700,
    returns: 8.5,
    charData: {
      percentIncrease: 2.77,
      data: [0, 4, 5, 10, 8, 5, 7, 16, 13, 9, 14, 16],
    },
  },
  {
    id: 3,
    name: 'Climate Action',
    totalDeposit: 10500,
    returns: 8.8,
    charData: {
      percentIncrease: 1.37,
      data: [1, 3, 5, 6, 8, 3, 7, 11, 12, 9, 14, 16],
    },
  },
];

class MyAccount extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    totalDeposit: 10800,
    returns: 6.14,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  onCircleInvestPress = item => {
    console.log('onCircleInvestPress', item);
  };

  onCircleInvitePress = item => {
    console.log('onCircleInvestPress', item);
  };

  renderCarouselItem = ({ item }) => (
    <CirclesCard
      name={item.name}
      totalDeposit={item.totalDeposit}
      returns={item.returns}
      charData={item.charData}
      onInvestPress={() => this.onCircleInvestPress(item)}
      onInvitePress={() => this.onCircleInvitePress(item)}
    />
  );

  navigateToCirclesList = () => {
    this.props.navigation.navigate('CirclesOfImpact');
  };

  render() {
    const { totalDeposit, returns } = this.state;

    return (
      <Container>
        <ScrollView
          containerCustomStyle={{
            flex: 1,
          }}
        >
          <Wrapper>
            <InfoWrapper>
              <InfoBlock alignLeft>
                <InfoTitle>TOTAL DEPOSITS</InfoTitle>
                <InfoValue alignLeft>
                  $
                  {totalDeposit.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </InfoValue>
              </InfoBlock>
              <InfoBlock alignLeft={false}>
                <InfoTitle>RETURNS*</InfoTitle>
                <InfoValue alignLeft={false}>
                  {returns.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                  %
                </InfoValue>
              </InfoBlock>
            </InfoWrapper>
            <LineChart
              chartWidth={screenWidth - 80}
              chartHeight={150}
              weekData={data1}
              monthData={data2}
              yearData={data3}
              allData={data4}
              percentIncrease={1.76}
              singleChart={false}
            />
            <Circles>
              <CirclesTitle>CIRCLES YOU ARE INVESTING IN</CirclesTitle>
              <Carousel
                data={circles}
                renderItem={this.renderCarouselItem}
                sliderWidth={screenWidth}
                itemWidth={250}
                containerCustomStyle={{ overflow: 'visible' }}
                removeClippedSubviews={false}
                activeAnimationType="default"
                inactiveSlideScale={0.8}
                inactiveSlideShift={-10}
              />
            </Circles>

            <BottomBtn onPress={this.navigateToCirclesList}>
              <BottomBtnText>SEE MORE CIRCLES</BottomBtnText>
            </BottomBtn>
          </Wrapper>
        </ScrollView>
      </Container>
    );
  }
}

export default MyAccount;
