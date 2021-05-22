import React from 'react';
import styled from 'styled-components';
import Emotion from './Emotion';

const Login = () => {
  return (
    <LoginWrap>
      <div>123</div>
      <Emotion />
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
