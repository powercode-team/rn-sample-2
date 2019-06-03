import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
`;

const Option = styled.TouchableOpacity`
  height: 55;
  flex-direction: row;
  border-radius: 5;
  margin-bottom: 10;
  background-color: ${({ isActive, theme }) =>
    isActive ? `${theme.colors.primary}20` : theme.colors.inputBackground};
`;

const MarkWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 55;
  height: 55;
  border-radius: 5;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const LabelWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Label = styled.Text`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 18;
  margin-left: 10;
`;

export { Wrapper, Option, MarkWrapper, LabelWrapper, Label };
