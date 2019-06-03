import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { loginGoogle, loginFacebook } from '../../store/actions';

import { Button } from '../../components/common';

import {
  Container,
  Title,
  BottomImage,
  Buttons,
  ButtonWrapper,
  SignUpEmailBtn,
  SignUpEmailText,
} from './styled';

import bottomImage from '../../../assets/images/sign-in.png';

class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    loginGoogle: PropTypes.func.isRequired,
    loginFacebook: PropTypes.func.isRequired,
  };

  onGoogleButtonPress = () => {
    this.props.loginGoogle(() => {
      this.props.navigation.navigate('Welcome');
    });
  };

  onFacebookButtonPress = async () => {
    this.props.loginFacebook(() => {
      this.props.navigation.navigate('Welcome');
    });
  };

  render() {
    return (
      <Container>
        <Title>Sign into your account</Title>
        <Buttons>
          <ButtonWrapper>
            <Button
              onPress={this.onFacebookButtonPress}
              text="Sign in with Facebook"
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              onPress={this.onGoogleButtonPress}
              text="Sign in with Google"
            />
          </ButtonWrapper>
          <SignUpEmailBtn
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <SignUpEmailText>Sign in with Email</SignUpEmailText>
          </SignUpEmailBtn>
        </Buttons>

        <BottomImage
          source={bottomImage}
          resizeMode="cover"
          resizeMethod="resize"
        />
      </Container>
    );
  }
}

const mapDispatchToProps = {
  loginGoogle,
  loginFacebook,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
