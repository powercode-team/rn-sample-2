import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { screenWidth } from '../../utils/deviceInfo';

import { LineChart } from '../../components/common';
import { Tabs, Details } from '../../components/SingleCircle';

import {
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
} from './styled';

class SingleCircle extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('selectedCircle').title,
  });

  state = {
    title: '',
    description: '',
    returns: null,
    supporting: null,
    circlesColors: [],
    tags: [],
    chartData: {},
    activeTabIndex: 0,
  };

  componentDidMount() {
    const circle = this.props.navigation.getParam('selectedCircle');

    this.setState({
      title: circle.title,
      description: circle.description,
      returns: circle.returns,
      supporting: circle.supporting,
      circlesColors: circle.circlesColors,
      tags: circle.tags,
      chartData: circle.chartData,
      dailyChange: circle.dailyChange,
      companies: circle.companies,
      investCompanies: circle.investCompanies,
    });
  }

  onTabChange = index => {
    this.setState({ activeTabIndex: index });
  };

  renderContent = () => {
    const { activeTabIndex } = this.state;

    if (activeTabIndex === 0) {
      const { circlesColors, returns, dailyChange, companies } = this.state;
      return (
        <Details
          circlesColors={circlesColors}
          returns={returns}
          dailyChange={dailyChange}
          companies={companies}
        />
      );
    }
    if (activeTabIndex === 1) {
      return (
        <EmptyContent>
          <EmptyContentTitle>SOCIAL</EmptyContentTitle>
        </EmptyContent>
      );
    }
    if (activeTabIndex === 2) {
      return (
        <EmptyContent>
          <EmptyContentTitle>NEWS</EmptyContentTitle>
        </EmptyContent>
      );
    }
    return null;
  };

  onSeeMorePress = () => {};

  onInvestPress = () => {
    const { title, investCompanies, tags } = this.state;
    this.props.navigation.navigate('CompaniesList', {
      title,
      investCompanies,
      tags,
    });
  };

  render() {
    const {
      description,
      supporting,
      tags,
      chartData,
      activeTabIndex,
    } = this.state;

    return (
      <Scroll>
        <TagsWrapper>
          {tags.map(tag => (
            <TagWrapper key={tag} activeOpacity={1}>
              <Tag>#{tag}</Tag>
            </TagWrapper>
          ))}
        </TagsWrapper>
        <Description>{description}</Description>

        <ChartWrapper>
          {Object.keys(chartData).length ? (
            <LineChart
              chartWidth={screenWidth - 80}
              chartHeight={150}
              weekData={chartData.week}
              monthData={chartData.month}
              yearData={chartData.year}
              allData={chartData.all}
              percentIncrease={1.76}
              singleChart={false}
              colorFrom="#FFF3F9"
              colorTo="#FF8AC2"
            />
          ) : null}
        </ChartWrapper>
        <Tabs
          tabs={['DETAILS', 'SOCIAL', 'NEWS']}
          onTabChange={this.onTabChange}
          activeIndex={activeTabIndex}
          renderContent={this.renderContent}
        />

        <LinkButton onPress={this.onSeeMorePress}>
          <LinkButtonText>SEE MORE</LinkButtonText>
        </LinkButton>
        <Button onPress={this.onInvestPress} activeOpacity={0.6}>
          <ButtonText>Invest</ButtonText>
        </Button>

        <SupportingText>
          +{supporting}k ARE SUPPORTING THIS CIRCLE
        </SupportingText>
      </Scroll>
    );
  }
}

export default SingleCircle;
