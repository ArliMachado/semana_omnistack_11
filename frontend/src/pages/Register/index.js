import React from 'react';

import { Container,
  RegisterContent,
  RegisterInfo,
  RegisterInfoLogo,
  RegisterInfoTitle,
  RegisterInfoDescription,
  RegisterInfoLink,
  RegisterInfoIcon,
  RegisterForm,
  RegisterFormOng,
  RegisterFormEmail,
  RegisterFormZap,
  RegisterFormLocation,
  RegisterFormCity,
  RegisterFormUF,
} from "./styles";

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg'

export default function Register() {
  return (
    <Container>
      <RegisterContent>
        <RegisterInfo>
          <RegisterInfoLogo src={logoImg} alt="Be To Hero" />

          <RegisterInfoTitle>Cadastro</RegisterInfoTitle>
          <RegisterInfoDescription>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG
          </RegisterInfoDescription>

          <RegisterInfoLink to="/">
            <RegisterInfoIcon />
            Já tenho cadastro
          </RegisterInfoLink>
        
        </RegisterInfo>
        <RegisterForm>
          <RegisterFormOng placeholder="Nome da ONG" />
          <RegisterFormEmail type="email" placeholder="E-mail" />
          <RegisterFormZap placeholder="whatsApp" />

        <RegisterFormLocation>
          <RegisterFormCity placeholder="Cidade" />
          <RegisterFormUF placeholder="UF" />
        </RegisterFormLocation>

        <Button type="submit">Cadastrar</Button>

        </RegisterForm>
      </RegisterContent>
    </Container>
  )
}