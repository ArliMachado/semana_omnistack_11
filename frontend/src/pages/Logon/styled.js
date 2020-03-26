import styled from 'styled-components'
import { FiLogIn } from "react-icons/fi";

import Button from '../../components/Button'
import Input from '../../components/Input'

export const LogonContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormContent = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;
export const Logo = styled.img``;

export const Form = styled.form`
  margin-top: 100px;
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const FormInput = styled(Input)``

export const FormButton = styled(Button)``;

export const FormButtonRegister = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &.hover { 
    opacity: 0.8;
  }
`;

export const RegisterIcon = styled(FiLogIn).attrs({
  size: 16,
})`
  margin-right: 8px;
  color: #e02041
`;

export const HeroImg = styled.img``;