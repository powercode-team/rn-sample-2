import styled from 'styled-components';

import { screenWidth } from '../../utils/deviceInfo';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${screenWidth};
  padding-vertical: 10;
  padding-horizontal: 20;
  margin-bottom: 20;
`;

const InfoBlock = styled.View`
  flex-direction: column;
  align-items: ${({ alignLeft }) => (alignLeft ? 'flex-start' : 'flex-end')};
`;

const InfoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 10;
  text-align: center;
`;

const InfoValue = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 28;
  text-align: center;
  margin-left: ${({ alignLeft }) => (alignLeft ? 20 : 0)};
  margin-right: ${({ alignLeft }) => (alignLeft ? 0 : 20)};
`;

const Circles = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 20;
  height: 330;
  overflow: hidden;
`;

const CirclesTitle = styled.Text`
  color: ${({ theme }) => theme.colors.greyFont};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14;
  text-align: center;
  margin-bottom: 20;
`;

const BottomBtn = styled.TouchableOpacity`
  margin-top: 10;
  padding-horizontal: 20;
`;

const BottomBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14;
`;

export {
  Container,
  Wrapper,
  InfoWrapper,
  InfoBlock,
  InfoTitle,
  InfoValue,
  Circles,
  CirclesTitle,
  BottomBtn,
  BottomBtnText,
};
