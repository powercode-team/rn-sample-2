import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CompanyCard } from '../../components/CompaniesList';

import { Scroll, TagsWrapper, TagWrapper, Tag } from './styled';

class CompaniesList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    investCompanies: [],
    tags: [],
  };

  componentDidMount() {
    const investCompanies = this.props.navigation.getParam('investCompanies');
    const tags = this.props.navigation.getParam('tags');

    this.setState({
      investCompanies,
      tags,
    });
  }

  buy = company => {
    console.log('company', company);
    this.props.navigation.navigate('BuyWithCompany', {
      circleName: this.props.navigation.getParam('title'),
      company: {
        name: company.name,
        riskLvl: company.riskLevel,
        logo: company.logo,
        returnVal: company.return,
      },
    });
  };

  learnMore = company => {
    console.log('company', company);
  };

  render() {
    const { investCompanies, tags } = this.state;

    return (
      <Scroll>
        <TagsWrapper>
          {tags.map(tag => (
            <TagWrapper key={tag} activeOpacity={1}>
              <Tag>#{tag}</Tag>
            </TagWrapper>
          ))}
        </TagsWrapper>
        {investCompanies.map(company => (
          <CompanyCard
            key={company.id}
            name={company.name}
            // logo={company.logo}
            riskLevel={company.riskLevel}
            returnVal={company.return}
            cost={company.cost}
            onInvestPress={() => this.buy(company)}
            onLearnMorePress={() => this.learnMore(company)}
          />
        ))}
      </Scroll>
    );
  }
}

export default CompaniesList;
