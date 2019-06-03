import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as shape from 'd3-shape';

import { LineChart } from 'react-native-svg-charts';

import Switcher from './Switcher';
import Gradient from './Gradient';

import { Wrapper, PercentIncrease } from './styled';

class LineChartCustomized extends Component {
  static propTypes = {
    chartWidth: PropTypes.number.isRequired,
    chartHeight: PropTypes.number.isRequired,
    defaultData: PropTypes.object,
    weekData: PropTypes.object,
    monthData: PropTypes.object,
    yearData: PropTypes.object,
    allData: PropTypes.object,
    activeDataItem: PropTypes.string,
    singleChart: PropTypes.bool,
    colorFrom: PropTypes.string,
    colorTo: PropTypes.string,
  };

  static defaultProps = {
    defaultData: {},
    weekData: {},
    monthData: {},
    yearData: {},
    allData: {},
    activeDataItem: '1w',
    singleChart: true,
    colorFrom: 'rgb(250, 251, 254)',
    colorTo: 'rgb(18, 86, 205)',
  };

  constructor(props) {
    super(props);

    this.state = {
      activeData: props.singleChart
        ? props.defaultData
        : this.getActiveData(props.activeDataItem),
      activeType: props.activeDataItem,
    };
  }

  getActiveData = type => {
    if (type === '1w') {
      return this.props.weekData;
    }
    if (type === '1m') {
      return this.props.monthData;
    }
    if (type === '1y') {
      return this.props.yearData;
    }
    if (type === 'all') {
      return this.props.allData;
    }
    return this.defaultData;
  };

  changeChartData = type => {
    const data = this.getActiveData(type);
    this.setState({ activeData: data, activeType: type });
  };

  render() {
    const {
      chartWidth,
      chartHeight,
      singleChart,
      colorFrom,
      colorTo,
    } = this.props;

    const { activeData, activeType } = this.state;

    return (
      <Wrapper>
        <PercentIncrease>+{activeData.percentIncrease}%</PercentIncrease>
        <LineChart
          style={{ height: chartHeight, width: chartWidth }}
          data={activeData.data}
          contentInset={{ top: 10, bottom: 10 }}
          curve={shape.curveNatural}
          svg={{
            strokeWidth: 4,
            stroke: 'url(#gradient)',
          }}
        >
          <Gradient from={colorFrom} to={colorTo} />
        </LineChart>
        {!singleChart && (
          <Switcher activeItem={activeType} onChange={this.changeChartData} />
        )}
      </Wrapper>
    );
  }
}

export default LineChartCustomized;
