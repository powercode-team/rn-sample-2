import styled from 'styled-components';

import { screenHeight } from '../../utils/deviceInfo';

const Container = styled.View`
  flex: 1;
`;

const SlideWrapper = styled.View`
  flex: 1;
  padding-top: 50;
`;

const SlideImage = styled.ImageBackground`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10;
  width: 100%;
  height: ${screenHeight * 0.7};
  max-height: ${screenHeight * 0.7};
  min-height: ${screenHeight * 0.7};
  padding-bottom: 110;
`;

const SlideContentWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-horizontal: 10;
  padding-top: 20;
  padding-bottom: 20;
  height: ${screenHeight * 0.3};
  max-height: ${screenHeight * 0.3};
  min-height: ${screenHeight * 0.3};
`;

const SlideTitle = styled.Text`
  width: 100%;
  margin-bottom: 20;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 22;
  text-align: center;
`;

const BlueText = styled(SlideTitle)`
  color: ${({ theme }) => theme.colors.primary};
`;

const SlideDescription = styled.Text`
  width: 100%;
  margin-bottom: 40;
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 16;
  text-align: center;
`;

export {
  Container,
  SlideWrapper,
  SlideContentWrapper,
  SlideImage,
  SlideTitle,
  BlueText,
  SlideDescription,
};
