import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { login } from '../../store/actions';

import { Button, TextInput } from '../../components/common';

import {
  Container,
  Logo,
  Title,
  FieldsWrapper,
  WrapperInput,
  ErrorMessage,
  FormErrorMessage,
} from './styled';

import LogoImg from '../../../assets/images/logo.png';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    signInError: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    emailErr: '',
    password: '',
    passwordErr: '',
  };

  onValueChange = (field, value) => {
    this.setState(prevState => {
      const errName = `${field}Err`;
      if (prevState[errName]) {
        return { [field]: value, [errName]: false };
      }
      return { [field]: value };
    });
  };

  validate = () => {
    const { email, password } = this.state;
    let valid = true;
    let errors = {};
    const emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRe.test(email)) {
      valid = false;
      errors = { ...errors, emailErr: 'Not valid email' };
    }

    if (!password.length) {
      valid = false;
      errors = { ...errors, passwordErr: 'Enter password' };
    }

    if (!valid) {
      this.setState(errors);
    }

    return valid;
  };

  submit = () => {
    if (this.validate()) {
      const { email, password } = this.state;

      this.props.login(email, password, () => {
        this.props.navigation.navigate('Welcome');
      });
    }
  };

  render() {
    const { email, emailErr, password, passwordErr } = this.state;

    const { signInError } = this.props;

    return (
      <Container>
        <Logo source={LogoImg} resizeMode="contain" resizeMethod="resize" />
        <Title>Sign in with email </Title>

        {signInError.length ? (
          <FormErrorMessage>{signInError}</FormErrorMessage>
        ) : null}

        <FieldsWrapper>
          <WrapperInput>
            {emailErr.length ? <ErrorMessage>{emailErr}</ErrorMessage> : null}
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={value => this.onValueChange('email', value)}
              autoComplete="email"
              autoCapitalize="none"
            />
          </WrapperInput>
          <WrapperInput>
            {passwordErr.length ? (
              <ErrorMessage>{passwordErr}</ErrorMessage>
            ) : null}
            <TextInput
              placeholder="Password"
              autoComplete="password"
              value={password}
              onChangeText={value => this.onValueChange('password', value)}
              secureTextEntry
            />
          </WrapperInput>
        </FieldsWrapper>

        <Button text="Sign In" onPress={this.submit} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  signInError: state.user.signInError,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
