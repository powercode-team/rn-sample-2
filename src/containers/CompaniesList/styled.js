import styled from 'styled-components';

const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
}))``;

const TagsWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20;
`;

const TagWrapper = styled.TouchableOpacity`
  margin-horizontal: 5;
  padding-horizontal: 5;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4;
`;

const Tag = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 13;
  text-align: center;
`;

export { Scroll, TagsWrapper, TagWrapper, Tag };
