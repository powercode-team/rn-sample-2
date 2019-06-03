import React, { Component } from 'react';
import PropTypes from 'prop-types';

import circlesOfImpact from '../../constants/circlesOfImpact';

import { CircleCard } from '../../components/CirclesOfImpact';

import { Scroll } from './styled';

class CirclesOfImpact extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {};

  invest = circle => {
    this.props.navigation.navigate('SingleCircle', { selectedCircle: circle });
  };

  seeMore = circle => {
    console.log('CIRCLE: ', circle);
  };

  render() {
    return (
      <Scroll>
        {circlesOfImpact.map(circle => (
          <CircleCard
            key={circle.id}
            title={circle.title}
            description={circle.description}
            returns={circle.returns}
            supporting={circle.supporting}
            circlesColors={circle.circlesColors}
            onInvestPress={() => this.invest(circle)}
            onSeeMorePress={() => this.seeMore(circle)}
          />
        ))}
      </Scroll>
    );
  }
}

export default CirclesOfImpact;
