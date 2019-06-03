import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '../../components/common';

import {
  Container,
  Logo,
  Title,
  SmallText,
  SignInWrapper,
  SignInBtn,
  SignInText,
} from './styled';

import LogoImg from '../../../assets/images/logo.png';

const SplashScreen = ({ navigation }) => (
  <>
    <StatusBar hidden />
    <Container>
      <Logo source={LogoImg} resizeMode="contain" resizeMethod="resize" />
      <Title>Invest in what matters to you</Title>

      <SmallText>I don’t have an account</SmallText>
      <Button
        onPress={() => navigation.navigate('Onboarding')}
        text="Get Started"
      />

      <SignInWrapper>
        <SmallText>I already have an account</SmallText>
        <SignInBtn onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Sign In</SignInText>
        </SignInBtn>
      </SignInWrapper>
    </Container>
  </>
);

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SplashScreen;
