import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Swiper from 'react-native-swiper';

import { Button } from '../../components/common';

import theme from '../../theme';

import {
  Container,
  SlideWrapper,
  SlideContentWrapper,
  SlideImage,
  SlideTitle,
  BlueText,
  SlideDescription,
} from './styled';

import ImgSlide1 from '../../../assets/images/slide-1.png';
import ImgSlide2 from '../../../assets/images/slide-2.png';
import ImgSlide3 from '../../../assets/images/slide-3.png';

const slides = [
  {
    id: 1,
    title: `Welcome to Mattrvest, a new way to invest in what matters to you!`,
    description:
      'An easy, fun and relatable way for you to invest to reach your life goals.',
    image: ImgSlide1,
  },
  {
    id: 2,
    title: 'Invest in what matters to you and shape the companies of tomorrow!',
    description:
      'Choose from our various professionally built circles that match your passion and values.',
    image: ImgSlide2,
  },
  {
    id: 1,
    title: 'Social and cost-effective investing on the go',
    description:
      /* eslint-disable-next-line */
      'Co-invest with your friends, stay updated with the latest news and manage your investments from anywhere.',
    image: ImgSlide3,
  },
];

const sliderStyles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: theme.colors.dot,
  },
  activeDotStyle: {
    width: 10,
    height: 10,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: theme.colors.activeDot,
  },
  paginationStyle: {
    height: 48,
    bottom: 10,
  },
});

const Onboarding = ({ navigation }) => (
  <Container>
    <Swiper
      loop={false}
      dotStyle={sliderStyles.dotStyle}
      activeDotStyle={sliderStyles.activeDotStyle}
      paginationStyle={sliderStyles.paginationStyle}
      scrollEnabled
    >
      {slides.map((slide, index) => (
        <SlideWrapper key={slide.id}>
          <SlideContentWrapper>
            {index === 0 ? (
              <SlideTitle>
                Welcome to <BlueText> Mattrvest</BlueText>, a new way to invest
                in what matters to you!
              </SlideTitle>
            ) : (
              <SlideTitle>{slide.title}</SlideTitle>
            )}
            <SlideDescription>{slide.description}</SlideDescription>
          </SlideContentWrapper>
          <SlideImage
            source={slide.image}
            resizeMode="cover"
            resizeMethod="resize"
          >
            {slides.length - 1 === index && (
              <Button
                onPress={() => navigation.navigate('Matters')}
                text="Next"
              />
            )}
          </SlideImage>
        </SlideWrapper>
      ))}
    </Swiper>
  </Container>
);

Onboarding.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Onboarding;
