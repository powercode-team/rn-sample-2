import { createStackNavigator, createAppContainer } from 'react-navigation';

import DetectAuth from '../containers/DetectAuth';
import SplashScreen from '../containers/SplashScreen';
import Onboarding from '../containers/Onboarding';
import Matters from '../containers/Matters';
import SignUp from '../containers/SignUp';
import SignUpEmail from '../containers/SignUpEmail';
import SignIn from '../containers/SignIn';
import Login from '../containers/Login';
import MyAccount from '../containers/MyAccount';
import CirclesOfImpact from '../containers/CirclesOfImpact';
import SingleCircle from '../containers/SingleCircle';
import CompaniesList from '../containers/CompaniesList';
import BuyWithCompany from '../containers/BuyWithCompany';

import { HeaderBackIcon } from '../components/common';

import theme from '../theme';

const stackNavigator = {
  DetectAuth: {
    screen: DetectAuth,
    navigationOptions: {
      header: null,
      title: 'DetectAuth',
    },
  },
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
      title: 'SplashScreen',
    },
  },
  Onboarding: {
    screen: Onboarding,
    navigationOptions: {
      header: null,
      title: 'Onboarding',
    },
  },
  Matters: {
    screen: Matters,
    navigationOptions: {
      header: null,
      title: 'Matters',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
      title: 'Sign Up',
    },
  },
  SignUpEmail: {
    screen: SignUpEmail,
    navigationOptions: {
      header: null,
      title: 'Sign Up Email',
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
      title: 'Sign In',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      title: 'Login',
    },
  },
  MyAccount: {
    screen: MyAccount,
    navigationOptions: {
      title: 'My Account',
    },
  },
  CirclesOfImpact: {
    screen: CirclesOfImpact,
    navigationOptions: {
      title: 'Circles of Impact',
    },
  },
  SingleCircle: {
    screen: SingleCircle,
  },
  CompaniesList: {
    screen: CompaniesList,
  },
  BuyWithCompany: {
    screen: BuyWithCompany,
  },
};

export const config = {
  initialRouteName: 'MyAccount',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: theme.colors.white,
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: theme.fonts.primary.semiBold,
      fontSize: 20,
      color: theme.colors.primary,
    },
    headerBackTitle: null,
    headerBackImage: HeaderBackIcon,
  },
};

export default createAppContainer(createStackNavigator(stackNavigator, config));
