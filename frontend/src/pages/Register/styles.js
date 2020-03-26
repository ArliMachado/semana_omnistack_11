import styled from 'styled-components';

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import Input from '../../components/Input';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterContent = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterInfo = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const RegisterInfoLogo = styled.img``;

export const RegisterInfoTitle = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const RegisterInfoDescription = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

export const RegisterInfoLink = styled(Link)`
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

export const RegisterInfoIcon = styled(FiArrowLeft).attrs({
  size: 16,
})`
  margin-right: 8px;
  color: #e02041;
`;


export const RegisterForm = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const RegisterFormOng = styled(Input)`
  margin-bottom: 10px;
`;

export const RegisterFormEmail = styled(Input)`
    margin-bottom: 10px;
`;

export const RegisterFormZap = styled(Input)`
    margin-bottom: 10px;
`;



export const RegisterFormLocation = styled.div`
  display: flex;
`;
export const RegisterFormCity = styled(Input)``;
export const RegisterFormUF = styled(Input)`
  width: 80px;
  margin-left: 8px;
`;

