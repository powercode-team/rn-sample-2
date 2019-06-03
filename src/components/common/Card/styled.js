import styled from 'styled-components';

const Wrapper = styled.View`
  height: ${({ height }) => height};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-vertical: 10;
  padding-horizontal: 20;
  margin-bottom: 20;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10;
  elevation: 5;
  shadow-offset: 0 0;
  shadow-color: #8386a3;
  shadow-radius: 10;
  shadow-opacity: 0.5;
`;

export { Wrapper };
