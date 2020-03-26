import React from 'react';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import { LogonContainer,
  FormContent, 
  Logo, 
  Form, 
  FormTitle, 
  FormInput, 
  FormButton, 
  FormButtonRegister,
  RegisterIcon, 
  HeroImg } from './styled';

export default function Logon() {
  return (
    <LogonContainer>
      <FormContent>
        <Logo src={logoImg} alt="Be The Hero" />
        <Form>
          <FormTitle>Faça seu Login</FormTitle>

          <FormInput placeholder="Sua ID" />
          <FormButton type="submit">Entrar</FormButton>

          <FormButtonRegister to="/register">
            <RegisterIcon />
            Não tenho cadastro
          </FormButtonRegister>
        </Form>
        
      </FormContent>
      <HeroImg src={heroesImg} alt="Heroes" />
    </LogonContainer>
  );
}