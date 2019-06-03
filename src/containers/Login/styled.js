import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.Image`
  width: 100%;
  max-height: 120;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 24;
  text-align: center;
  margin-bottom: 50;
`;

const FieldsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-horizontal: 20;
  margin-bottom: 70;
`;

const WrapperInput = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 5;
`;

const ErrorMessage = styled.Text`
  position: absolute;
  top: 9;
  left: 2;
  color: ${({ theme }) => theme.colors.error};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 12;
`;

const FormErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 16;
  text-align: center;
`;

export {
  Container,
  Logo,
  Title,
  FieldsWrapper,
  WrapperInput,
  ErrorMessage,
  FormErrorMessage,
};
