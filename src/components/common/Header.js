import React from 'react';
import { Logo } from '../../assets';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
      <img src={Logo} />
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  position: fixed;
  top: 5.5rem;
  width: 100%;
  text-align: center;
`;
